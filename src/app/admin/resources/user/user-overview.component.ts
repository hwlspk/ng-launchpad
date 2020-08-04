import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

import { User } from '../../../shared/models/user';

@Component({
  selector: 'lcd-user-overview',
  template: `
    <h3 class="">Overview</h3>

    <p>Overview about users data source</p>

    <h4>Top Users</h4>
    <div class="grid grid-pad">
      <a *ngFor="let user of users" routerLink="../{{ user.id }}">
        {{ user.name }}
      </a>
    </div>

    <h4>Metrics</h4>
    <h5>This week</h5>
    <p>
      <b>New Users</b>: 24
      <br/>
      <b>User Presence</b>: 67
    </p>

    <h4>Live Users</h4>
    <p>
      <b>Past 3 Hours</b>: 546
      <br />
      <b>Past 5 Minutes</b>: 102
    </p>
  `,
  styles: [
  ]
})
export class UserOverviewComponent implements OnInit {
  users: User[]; // = [];

  constructor(private userService: UserService) {
    this.users = []; // opt
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users.slice(1, 5));
  }
}
