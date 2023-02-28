import { ActionReducerMap } from '@ngrx/store';
import { Conversation } from './chat.model';
import { ConversationReducer } from '../../reducers/conversation.reducer';

export interface AppState {
  readonly conversationReducer: ConversationListState;
}

export interface ConversationListState {
  conversations: Array<Conversation>;
}

export const reducers: ActionReducerMap<AppState, any> = {
  conversationReducer: ConversationReducer,
};
