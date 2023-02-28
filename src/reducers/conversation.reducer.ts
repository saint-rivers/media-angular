import {
  ConversationAction,
  ConversationActionType,
} from '../app/models/actions/conversation.actions';
import { ConversationListState } from 'src/app/models/state.models';

const initialState: ConversationListState = {
  conversations: [],
};

export function ConversationReducer(
  state: ConversationListState = initialState,
  action: ConversationAction
): ConversationListState {
  switch (action.type) {
    case ConversationActionType.SET_CONVERSATIONS:
      return { conversations: action.payload };

    case ConversationActionType.ADD_CONVERSATION:
      return { conversations: [...state.conversations, action.payload] };

    default:
      return state;
  }
}
