import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from '../../environments/environment';
import { ChatRequest, ChatData } from '../models/chat-message';
import { Chat } from '../models/chat';

/**
 * tutorial reference: https://haseeamarathunga.medium.com/create-a-spring-boot-angular-websocket-using-sockjs-and-stomp-cb339f766a98
 */
@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  stompClient: Stomp.Client;
  public socketData: ChatData[] = [];

  public chatMap = new Map<string, Chat>();

  constructor() {
    this.stompClient = this.connect();
  }

  connect(): Stomp.Client {
    const webSocket = new SockJS(environment.webSocketUrl);
    return Stomp.over(webSocket);
  }

  private onReceiveMessage = (data: any) => {
    const payload: ChatData = JSON.parse(data.body);
    console.log(payload.targetChatId);
    this.chatMap.get(payload.targetChatId.toString())?.messages.push(payload);
  };

  openSocketConnection() {
    this.stompClient = this.connect();

    const _this = this;
    this.stompClient.connect({}, (frame: any) => {
      _this.stompClient.subscribe(`/topic/user/${1}`, this.onReceiveMessage);
    });
  }

  sendMessage(message: ChatRequest) {
    this.stompClient.send('/app/messages/send', {}, JSON.stringify(message));
  }

  closeConnection() {
    this.stompClient.disconnect(() => {
      console.log('closed connection');
    });
  }
}
