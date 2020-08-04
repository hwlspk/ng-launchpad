import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from './user.service';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'lcd-user-detail',
  template: `
    <!--
    <h3 class="">User Detail</h3>
    <h3 class="">User Details</h3>

    <p>Details of the user</p>
    -->

    <lcd-user-item [user]="user"></lcd-user-item>
    
    <br>

    <div>
      <button (click)="goBack()">Go Back</button>
    </div>
  `,
  styles: [
  ]
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }
}
