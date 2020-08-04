import { Component } from '@angular/core';

import { NavigationLink } from './shared/models/navigation-link';

@Component({
  selector: 'app-root',
  /*
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  */
  /*
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
  */
  template: `
    <header>
      <h1>{{ title }}</h1>

      <lcd-navigation [links]="headerNavLinks"></lcd-navigation>
    </header>

    <router-outlet></router-outlet>

    <lcd-messaging></lcd-messaging>
  `,
  styles: [`
    header {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  `]
})
export class AppComponent {
  title = 'Launchpad';
  headerNavLinks: NavigationLink[];

  constructor() {
    this.headerNavLinks = [
      { link: '/', text: 'Home', exact: true },
      { link: '/about', text: 'About'},
      { link: '/contact', text: 'Contact'},
      { link: '/blog', text: 'Blog'},
      { link: '/shop', text: 'Shop'},
      { link: '/admin', text: 'Admin'},
      { link: 'login', text: 'Login'},
      { link: 'signup', text: 'Signup'},
    ];
  }
}
