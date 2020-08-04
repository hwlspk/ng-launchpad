import { Component, OnInit } from '@angular/core';

import { NavigationLink } from '../shared/models/navigation-link';

@Component({
  selector: 'lcd-admin',
  template: `
    <h2>Admin</h2>

    <div class="admin">
      <lcd-navigation [links]="adminNavLinks" [stacked]="true"></lcd-navigation>

      <div class="spacer full-width">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .admin {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .full-width {
      flex-grow: 1;
    }
  `]
})
export class AdminComponent implements OnInit {
  adminNavLinks: NavigationLink[];

  constructor() {
    this.adminNavLinks = [
      {
        link: '.',
        text: 'Overview',
        exact: true
      },
      { link: './dashboard', text: 'Dashboard'},
      { link: './resources', text: 'Resources'},
      { link: './others', text: 'Others'},
    ];
  }

  ngOnInit(): void {
  }

}
