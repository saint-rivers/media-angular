import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WebSocketService } from '../../services/websocket.service';
import { ChatRequest } from '../../models/chat-message';
import { Chat } from 'src/app/models/chat';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent implements OnInit, OnDestroy {
  public chatMap: Map<string, Chat>;

  // currentChatId = new FormControl<number>(1, {
  //   nonNullable: true,
  //   updateOn: 'change',
  // });

  currentChatId = -1;

  constructor(private webSocketService: WebSocketService) {
    this.chatMap = webSocketService.chatMap;
    this.chatMap.set('1', {
      chatId: 1,
      groupProfile: 'fff',
      messages: [],
      members: undefined,
    });
    this.chatMap.set('2', {
      chatId: 2,
      groupProfile: 'asd',
      messages: [],
      members: undefined,
    });
  }

  updateChatId(e: any) {
    this.currentChatId = e.target.value;
  }

  ngOnInit(): void {
    console.log('attempting to connect');
    this.webSocketService.openSocketConnection();
  }

  sendTestMessage() {
    const payload = {
      content: 'waddup',
      timeSent: new Date(),
      senderId: 1,
      targetChatId: this.currentChatId,
      type: 'message',
    } as ChatRequest;

    this.webSocketService.sendMessage(payload);
  }

  ngOnDestroy(): void {
    this.webSocketService.closeConnection();
  }
}
