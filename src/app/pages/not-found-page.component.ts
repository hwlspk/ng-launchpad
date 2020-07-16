import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-not-found-page',
  template: `
    <h2>Page Not Found</h2>

    <p>
      The page you are looking for cannot be found.
    </p>

    <a [routerLink]="['/']">Back to Home</a>
  `,
  styles: [
  ]
})
export class NotFoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
