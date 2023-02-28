import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestingComponent } from './views/testing/testing.component';
import { MessagingComponent } from './views/messaging/messaging.component';
import { ConversationListComponent } from './components/conversation-list/conversation-list.component';
import { ActiveChatComponent } from './components/active-chat/active-chat.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './models/state.models';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    MessagingComponent,
    ConversationListComponent,
    ActiveChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
