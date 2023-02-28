import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebSocketService } from '../../services/websocket.service';
import { ChatRequest } from '../../models/chat-message';
import { Conversation } from 'src/app/models/chat.model';
import { FormBuilder } from '@angular/forms';
import { ConversationService } from '../../services/conversation.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent implements OnInit, OnDestroy {
  public chatMap: Map<string, Conversation>;

  conversation = this.formBuilder.group({
    groupName: '',
    groupProfile: '',
    memberIds: [],
  });

  currentChatId: number = -1;

  constructor(
    private webSocketService: WebSocketService,
    private conversationService: ConversationService,
    private formBuilder: FormBuilder
  ) {
    this.chatMap = webSocketService.chatMap;
    conversationService.getConversations().subscribe((res) => {
      this.chatMap = res;
    });
  }

  updateChatId(e: any) {
    this.currentChatId = e.target.value;
  }

  ngOnInit(): void {
    console.log('attempting to connect');
    // this.webSocketService.subscribeToTopic();
  }

  sendTestMessage() {
    const payload = {
      content: 'waddup',
      timeSent: new Date(),
      senderId: 'd4b6af2c-3cb5-4263-8ea7-d092cfddede5',
      targetChatId: 11,
      type: 'message',
    } as ChatRequest;

    this.webSocketService.sendMessage(payload);
  }

  ngOnDestroy(): void {
    this.webSocketService.closeConnection();
  }

  createConversation() {
    this.conversationService
      .postConversation({
        groupName: this.conversation.get('groupName')!.value,
        groupProfile: this.conversation.get('groupProfile')!.value,
        memberIds: [
          '1a6fa8ac-949a-42b5-b0fe-35b85b56a047',
          '9505eaee-256e-4ce7-828f-c67f941b8bf7',
        ],
      })
      .subscribe();
  }
}
