import { Component, OnInit } from '@angular/core';

import { MessagingService } from '../../../shared/services/messaging.service';

import { UserService } from './user.service';


import { User } from '../../../shared/models/user';
import { USERS } from '../../../shared/mocks/user-list';

@Component({
  selector: 'lcd-user-listing',
  template: `
    <h3 class="">Data</h3>

    <!--
    <p>List/Table to display the application users.</p>
    -->

    <div class="master-detail">
      <ul class="users top-content">
        <li *ngFor="let user of users"
          [class.selected]="user === selectedUser"
          (click)="onSelect(user)">
          <span>{{ user.id }}</span>  - {{ user.name }}
        </li>
      </ul>

      <div class="spacer">
        <lcd-user-item
          [user]="selectedUser">
        </lcd-user-item>

        <br>

        <div *ngIf="selectedUser">
          <a routerLink="./{{ selectedUser.id }}"> <!-- routerLink="./{{ selectedUser.id }} -->
            {{ 'Detail' }}
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .users {
      list-style: none;
      padding: 0;
    }
    .users li {
      cursor: pointer;
      // background-color: #EEE;
    }
    .users li:hover {
      color: #607D8B;
      background-color: #DDD;
    }
    .users li.selected {
      background-color: #CFD8DC;
      color: white;
    }
    .users li.selected:hover {
      background-color: #BBD8DC;
      color: white;
    }
    `,
    `
    .master-detail {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
    }
  `]
})
export class UserListingComponent implements OnInit {
  //user = 'John Doe';
  /*
  user: User = {
    id: 1,
    name: 'John Doe'
  };
  */
  // users = USERS;
  users: User[];
  selectedUser: User;

  constructor(
    private userService: UserService,
    private messagingService: MessagingService
  ) {
    // for simple initialization such as wiring constructor parameters to properties
  }

  ngOnInit(): void {
    // its called after constructing this component instance
    this.getUsers();
  }

  getUsers(): void {
    //this.users = this.userService.getUsers();
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    this.messagingService.add(`UsersComponent: Selected user id=${user.id}`);
  }
}
