import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-resource-index',
  template: `
    <h4>Index</h4>

    <p>Resource management</p>

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
export class ResourceIndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
