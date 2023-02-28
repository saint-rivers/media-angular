import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SetConversationAction } from 'src/app/models/actions/conversation.actions';
import { Conversation } from 'src/app/models/chat.model';
import { AppState } from 'src/app/models/state.models';
import { ConversationService } from 'src/app/services/conversation.service';
import { ConversationAction } from '../../models/actions/conversation.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css'],
})
export class ConversationListComponent implements OnInit {
  public chatMap: Map<number, Conversation> = new Map<number, Conversation>();
  // public conversations: Observable<Conversation[]> | null = null;

  constructor(
    private conversationService: ConversationService,
    private store: Store<AppState>
  ) {
    this.conversationService.getConversations().subscribe((res) => {
      this.store.dispatch(new SetConversationAction(res));
    });
  }
  
  ngOnInit(): void {
    console.log('on init');

    const conversations = this.store.select(
      (state) => state.conversationReducer.conversations
    );

    conversations.subscribe((res: Conversation[]) => {
      let tmp = new Map<number, Conversation>();
      res.forEach((e) => {
        tmp.set(e.chatId, e);
      });
      this.chatMap = tmp;
    });
  }
}
