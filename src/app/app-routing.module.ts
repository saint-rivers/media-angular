import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveChatComponent } from './components/active-chat/active-chat.component';
import { TestingComponent } from './views/testing/testing.component';
import { MessagingComponent } from './views/messaging/messaging.component';

const routes: Routes = [
  { path: 'hello/:id', component: MessagingComponent },
  { path: 'testing', component: TestingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
