export interface Message {
  messageId: number;
  content: string;
  type: 'message' | 'sticker';
  timeSent: Date;
  senderId: string;
  targetConversationId: number;
}
export interface MessageRequest {
  content: string;
  type: 'message' | 'sticker';
  timeSent: Date;
  targetConversationId: number;
}
