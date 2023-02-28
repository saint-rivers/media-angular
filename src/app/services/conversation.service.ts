import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as env from '../../environments/environment';
import { Conversation } from '../models/chat.model';

@Injectable({
  providedIn: 'root',
})
export class ConversationService {
  constructor(private http: HttpClient) {}

  postConversation(conversation: any): Observable<Conversation> {
    return this.http.post<Conversation>(
      `${env.environment.apiUrl}/api/v1/conversations`,
      {
        ...conversation,
      }
    );
  }

  getConversation(conversationId: number): Observable<any> {
    return this.http.get<any>(
      `${env.environment.apiUrl}/api/v1/conversations/${conversationId}`
    );
  }

  getConversations(): Observable<any> {
    return this.http.get<any>(
      `${
        env.environment.apiUrl
      }/api/v1/conversations/user/${'d4b6af2c-3cb5-4263-8ea7-d092cfddede5'}`
    );
  }
}
