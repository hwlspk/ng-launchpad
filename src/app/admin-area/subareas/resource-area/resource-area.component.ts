import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-resource-area',
  template: `
    <h3>Resources</h3>

    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class ResourceAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
