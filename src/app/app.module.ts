import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './views/testing/testing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessagingComponent } from './views/messaging/messaging.component';
import { ConversationListComponent } from './components/conversation-list/conversation-list.component';
import { ActiveChatComponent } from './components/active-chat/active-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    MessagingComponent,
    ConversationListComponent,
    ActiveChatComponent,
    // EnvironmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
