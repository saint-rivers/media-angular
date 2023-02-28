import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css'],
})
export class ActiveChatComponent {
  activeChatId: number = -1;

  constructor(private router: ActivatedRoute) {
    router.params.subscribe((pathParam) => {
      this.activeChatId = parseInt(pathParam['id']);
    });
  }
}
