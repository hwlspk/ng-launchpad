import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-resources',
  template: `
    <!--
    <h3 class="top-content">Resources / Index</h3>

    <p>Resource management</p>
    -->

    <h3 class="top-content">Resources</h3>

    <div>
      <ul>
        <li>
          <a routerLink="./user">
            Users
          </a>
        </li>
        <li>Posts</li>
        <li>Products</li>
        <li>Forms</li>
        <li>Logs</li>
      </ul>
    </div>
  `,
  styles: [
  ]
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
