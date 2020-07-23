import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-dashboard',
  template: `
    <h3>Dashboard</h3>

    <p>Panel to view traffic and monitor website usage</p>
  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
