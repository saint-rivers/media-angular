export interface ChatRequest {
  content: string;
  type: 'message' | 'sticker';
  timeSent: Date;
  senderId: string;
  targetChatId: number;
}

export interface ChatData {
  messageId: number;
  content: string;
  type: 'message' | 'sticker';
  timeSent: Date;
  senderId: string;
  targetChatId: number;
}
