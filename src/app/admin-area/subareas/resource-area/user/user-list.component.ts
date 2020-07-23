import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-user-list',
  template: `
    <h5>User List</h5>

    <p>List/Table to display the application users.</p>
  `,
  styles: [
  ]
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
