import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-home-page',
  template: `
    <h2>Home</h2>

    <p>
      <b>Ng Launchpad</b> provides a foundation to create web application with Angular.
    </p>
  `,
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
