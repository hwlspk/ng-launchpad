import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { User } from '../../../shared/models/user';
import { USERS } from '../../../shared/mocks/user-list';

import { MessagingService } from '../../../shared/services/messaging.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private messagingService: MessagingService
  ) {
    // "service-in-service" scenario
  }

  getUsers(): Observable<User[]> {
    // returns an observable that emits a single value, an array of mock users
    // if with http, the array is from the body of the HTTP response

    // TODO: send the message _after_ fetching the users
    this.messagingService.add('UserService: fetched users');

    return of(USERS);
  }
  /*
  getUsers(): User[] {
    return USERS;
  }
  */

  getUser(id: number): Observable<User> {
    // TODO: send the message _after_ fetching the user
    this.messagingService.add(`UserService: fetched user id=${id}`);
    return of(USERS.find(user => user.id === id));
  }
}
