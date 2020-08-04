import { Component, OnInit, Input } from '@angular/core';

import { NavigationLink } from '../models/navigation-link';

@Component({
  selector: 'lcd-navigation',
  template: `
    <nav [class.stacked]="stacked">
      <ng-template ngFor let-item [ngForOf]="links">

        <a [routerLink]="item.link"
           routerLinkActive="active" [routerLinkActiveOptions]="{ exact: item.exact }">
          {{ item.text }}</a>

        &nbsp;
      </ng-template>
    </nav>
  `,
  styles: [`
    a {
      color: black;
      text-decoration: none;
    }
    a:hover {
      color: gray;
    }
    a:active {
      text-decoration: underline;
    }
    `,
    `
    a.active {
      color: black;
      text-decoration: underline;
    }
    `,
    `
    .stacked a {
      display: block;
    }
  `]
})
export class NavigationComponent implements OnInit {
  /*
    If 'exact' property doesn't exist is undefined
    which means is converted to false
  */
  @Input() links: NavigationLink[];
  @Input() stacked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
