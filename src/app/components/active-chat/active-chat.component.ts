import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models/message.model';
import { MessagesService } from '../../services/messages.service';
import { FormBuilder } from '@angular/forms';
import { MessageRequest } from '../../models/message.model';
import { WebSocketService } from '../../services/websocket.service';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css'],
})
export class ActiveChatComponent {
  activeChatId: number = -1;
  messages: Message[] = [];
  // stompClient: Stomp.Client;

  newMessage = this.formBuilder.group({
    content: [''],
  });

  sendMessage() {
    const message = {
      content: this.newMessage.get('content')!.value!,
      type: 'message',
      targetConversationId: this.activeChatId,
      timeSent: new Date(),
    } as MessageRequest;

    this.webSocketService.sendMessageV2(message);
  }

  constructor(
    private router: ActivatedRoute,
    private messageService: MessagesService,
    private webSocketService: WebSocketService,
    private formBuilder: FormBuilder
  ) {
    webSocketService.subscribeToTopic((data: Stomp.Message) => {
      const payload: Message = JSON.parse(data.body);
      this.messages.push(payload);
    });

    this.messages = webSocketService.chatMap.get(
      this.activeChatId.toString()
    )?.messages!;

    this.router.params.subscribe((pathParam) => {
      const activeChat = parseInt(pathParam['id']);
      this.activeChatId = activeChat;
      this.messageService
        .getByConversationId(this.activeChatId)
        .subscribe((res: Message[]) => {
          this.messages = res;
        });
    });
  }
}
