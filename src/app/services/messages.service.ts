import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as env from '../../environments/environment';
import { Message, MessageRequest } from '../models/message';
import { WebSocketService } from './websocket.service';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(
    private http: HttpClient,
  ) {}

  getByConversationId(conversationId: number): Observable<Message[]> {
    return this.http.get<Message[]>(
      `${env.environment.apiUrl}/api/v1/messages/conversation/${conversationId}`
    );
  }
}
