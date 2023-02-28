import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from '../../environments/environment';
import { ChatRequest } from '../models/chat-message';
import { Conversation } from '../models/chat.model';
import { MessageRequest, Message } from '../models/message.model';

/**
 * tutorial reference: https://haseeamarathunga.medium.com/create-a-spring-boot-angular-websocket-using-sockjs-and-stomp-cb339f766a98
 */
@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  stompClient: Stomp.Client;
  public socketData: Message[] = [];

  public chatMap = new Map<string, Conversation>();

  constructor() {
    this.stompClient = this.connect();
  }

  connect(): Stomp.Client {
    const webSocket = new SockJS(environment.webSocketUrl);
    return Stomp.over(webSocket);
  }

  private onReceiveMessage = (data: any) => {
    const payload: Message = JSON.parse(data.body);
    console.log(payload);
    this.chatMap
      .get(payload.targetConversationId.toString())
      ?.messages.push(payload);
  };

  /**
   * Function that subscribes to the websocket and listens for incoming message
   * @param onReceive An arrow function that consumes Stomp.Message\nTo access the data, use .body field 
   */
  subscribeToTopic(onReceive: (data: Stomp.Message) => any) {
    this.stompClient = this.connect();

    const _this = this;
    this.stompClient.connect({}, (frame: any) => {
      _this.stompClient.subscribe(`/topic/user/${11}`, onReceive);
    });
  }

  // subscribeToTopic() {
  //   this.stompClient = this.connect();

  //   const _this = this;
  //   this.stompClient.connect({}, (frame: any) => {
  //     _this.stompClient.subscribe(`/topic/user/${11}`, this.onReceiveMessage);
  //   });
  // }

  sendMessage(message: ChatRequest) {
    this.stompClient.send('/app/messages/send', {}, JSON.stringify(message));
  }

  sendMessageV2(message: MessageRequest) {
    this.stompClient.send('/app/v2/messages/send', {}, JSON.stringify(message));
  }

  closeConnection() {
    this.stompClient.disconnect(() => {
      console.log('closed connection');
    });
  }
}
