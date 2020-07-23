import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-admin-panel',
  template: `
    <h3>Central</h3>

    <!--
    <p>
      Administrative control of the application
    </p>
    -->

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

    <!--
    <h3>Site Administration</h3>
    -->
  `,
  styles: [
  ]
})
export class AdminPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
