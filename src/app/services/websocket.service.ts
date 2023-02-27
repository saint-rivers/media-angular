import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

const chatUrl = 'http://localhost:8080/ws-chat';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  stompClient: Stomp.Client;
  public socketData: string[] = [];

  constructor() {
    this.stompClient = this.connect();
  }

  connect(): Stomp.Client {
    const webSocket = new SockJS(chatUrl);
    return Stomp.over(webSocket);
  }

  openSocketConnection() {
    this.stompClient = this.connect();

    const _this = this;
    this.stompClient.connect({}, function (frame: any) {
      _this.stompClient.subscribe(`/topic/user/${1}`, (data: any) => {
        console.log('subscribed', data.body);
        _this.socketData.push(JSON.parse(data.body));
      });
    });
  }

  sendMessage(message: any) {
    this.stompClient.send('/app/messages/send', {}, JSON.stringify(message));
  }

  closeConnection() {
    this.stompClient.disconnect(() => {
      console.log('closed connection');
    });
  }
}
