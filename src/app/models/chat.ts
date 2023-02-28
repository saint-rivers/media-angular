import { ChatData } from './chat-message';

export interface Chat {
  chatId: number;
  groupName: string;
  groupProfile: string;
  messages: ChatData[];
  members: string[] | undefined;
}
