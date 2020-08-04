import { Component, OnInit } from '@angular/core';

import { NavigationLink } from '../../../../shared/models/navigation-link';

@Component({
  selector: 'lcd-user-navigation',
  template: `
    <h3 class="top-content">Users</h3>

    <!--
    <p>Breadcrumb Navigation</p>
    -->

    <lcd-navigation [links]="resourceNavLinks"></lcd-navigation>

    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class UserNavigationComponent implements OnInit {
  resourceNavLinks: NavigationLink[];

  constructor() {
    this.resourceNavLinks = [
      {
        link: '.',
        text: 'Data',
        exact: true
      },
      { link: './overview', text: 'Overview'}
    ];
  }

  ngOnInit(): void {
  }

}
