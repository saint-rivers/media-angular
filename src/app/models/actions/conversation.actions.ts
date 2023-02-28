import { Action } from '@ngrx/store';
import { Conversation } from '../chat.model';

export enum ConversationActionType {
  SET_CONVERSATIONS = '[CONVERSATION] Set Conversations',
  ADD_CONVERSATION = '[CONVERSATION] Add Conversation',
}

export class SetConversationAction implements Action {
  readonly type = ConversationActionType.SET_CONVERSATIONS;
  constructor(public payload: Conversation[]) {}
}

export class AddConversationAction implements Action {
  readonly type = ConversationActionType.ADD_CONVERSATION;
  constructor(public payload: Conversation) {}
}
export type ConversationAction = SetConversationAction | AddConversationAction;
