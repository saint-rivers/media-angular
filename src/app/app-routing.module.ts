import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveChatComponent } from './components/active-chat/active-chat.component';

const routes: Routes = [{ path: 'hello/:id', component: ActiveChatComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
