import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-admin-overview',
  template: `
    <!--
    <h3 class="top-content">Site Administration</h3>
    -->
    <!--
    <h3 class="top-content">Central</h3>
    -->
    <!--
    <p>
      Administrative control of the application
    </p>
    -->

    <h3 class="top-content">Overview</h3>

    <h4>Resources - Quick Access</h4>
    <div>
      <p>None</p>
      <p>
        <a routerLink=".">All Resources</a>
      </p>
    </div>

    <h4>Links - Quick Access</h4>
    <div>
      <p>None</p>
    </div>

    <h4>Messages - Recents</h4>
    <div>
      <p>None</p>
      <p>
        <a routerLink=".">All Messages</a>
      </p>
    </div>
  `,
  styles: [
  ]
})
export class AdminOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
