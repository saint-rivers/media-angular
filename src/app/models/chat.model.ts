import { Message } from 'src/app/models/message.model';

export interface Conversation {
  chatId: number;
  groupName: string;
  groupProfile: string;
  messages: Message[];
  members: string[] | undefined;
}
