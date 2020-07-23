import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-admin-area',
  template: `
    <h2>Admin</h2>

    <nav>
      <a routerLink=".">Central</a>
      &nbsp;
      <a routerLink="./resources">Resources</a>
      &nbsp;
      <a routerLink="./dashboard">Dashboard</a>
      &nbsp;
      <a routerLink="./others">Others</a>
    </nav>
    
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class AdminAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
