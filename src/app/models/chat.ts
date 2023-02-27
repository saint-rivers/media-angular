import { ChatData } from "./chat-message";

export interface Chat {
  chatId: number;
  groupProfile: string;
  messages: ChatData[];
  members: string[] | undefined;
}
