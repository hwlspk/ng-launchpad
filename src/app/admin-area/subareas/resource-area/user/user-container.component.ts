import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-user-container',
  template: `
    <h4>Users</h4>

    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class UserContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
