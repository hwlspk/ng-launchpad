import { Component, OnInit } from '@angular/core';

import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'lcd-messaging',
  template: `
    <div *ngIf="messagingService.messages.length">

      <h3>Messages</h3>

      <label></label>
      <button class="clear"
              (click)="messagingService.clear()">clear</button>

      <div>&nbsp;</div>
      <!-- <br/>-->

      <div *ngFor='let message of messagingService.messages'>
        {{ message }}
      </div>

    </div>
  `,
  styles: [
  ]
})
export class MessagingComponent implements OnInit {

  constructor(
    public messagingService: MessagingService
  ) {
    // the service property must be public to allow a bind in the template
    // Angular only binds to public component properties
  }

  ngOnInit(): void {
  }

}
