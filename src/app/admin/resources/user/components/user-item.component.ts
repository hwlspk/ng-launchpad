import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../../../shared/models/user';

@Component({
  selector: 'lcd-user-item',
  template: `
    <div *ngIf="user">

      <h3 class="">{{ user.name }} / User Details</h3>
      <p>
        <b>{{ "id" | uppercase }}</b>: {{ user.id }}<br>
        <strong>{{ 'name' | titlecase }}</strong>: {{ user.name }}
      </p>

      <div>
        <label>Name:
          <input [(ngModel)]="user.name" placeholder="name" />
        </label>
      </div>

    </div>
  `,
  styles: [
  ]
})
export class UserItemComponent implements OnInit {
  @Input() user: User; // or selectedUser

  constructor() { }

  ngOnInit(): void {
  }

}
