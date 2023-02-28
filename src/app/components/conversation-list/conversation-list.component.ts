import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Chat } from 'src/app/models/chat';
import { ConversationService } from 'src/app/services/conversation.service';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css']
})
export class ConversationListComponent {
  public chatMap: Map<string, Chat> = new Map<string, Chat>();

  constructor(
    // private webSocketService: WebSocketService,
    private conversationService: ConversationService,
    private formBuilder: FormBuilder
  ) {
    // this.chatMap = webSocketService.chatMap;
    conversationService.getConversations().subscribe((res) => {
      this.chatMap = res;
    });
  }
}
