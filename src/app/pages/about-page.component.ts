import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-about-page',
  template: `
    <h2>About</h2>

    <p>
      <strong>Lauchpad</strong> is an exploratory project made with <b>Angular</b>.
    </p>

    <p>
      It exemplifies ways to construct Angular applications.
      <br>
      It explores the many features provided by the Angular Framework.
      <br/>
      It provides solutions to create projects ready for production.
    </p>

    <p>
      Angular Launchpad aims to be a progressive project suitable for learning about Angular and Web Development.
    </p>

    <p>
      The codebase is developed using an industrial approach where the code is written in multi-varied ways to create
      richness and flexibility in the codebase in order to expand possibilities and solify the difference as a principle.
    </p>

    <p>
      <b>Lauchpad</b> provides <i>simplicity</i>, <i>quality</i> and <i>adaptability</i> to front-end development using <strong>Angular</strong>.
    </p>
  `,
  styles: [
  ]
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
