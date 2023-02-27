import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent implements OnInit, OnDestroy {
  messages: string[];

  constructor(private webSocketService: WebsocketService) {
    this.messages = webSocketService.socketData;
  }

  ngOnInit(): void {
    console.log('attempting to connect');
    this.webSocketService.openSocketConnection();
  }

  sendTestMessage() {
    this.webSocketService.sendMessage({
      content: 'waddup',
      timeSent: new Date(),
      senderId: 1,
      targetChatId: 1,
      type: 'message',
    });
  }

  ngOnDestroy(): void {
    this.webSocketService.closeConnection();
  }
}
