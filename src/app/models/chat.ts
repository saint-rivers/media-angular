import { ChatData } from './chat-message';
import { Message } from 'src/app/models/message';

export interface Chat {
  chatId: number;
  groupName: string;
  groupProfile: string;
  messages: Message[];
  members: string[] | undefined;
}
