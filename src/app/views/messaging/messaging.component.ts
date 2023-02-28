import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Conversation } from '../../models/chat.model';
import { ConversationService } from '../../services/conversation.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css'],
})
export class MessagingComponent {}
