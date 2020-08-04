import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-contact-page',
  template: `
    <h2>Contacts</h2>

    <p>
      E-mail, Address, Map Position, etc.
    </p>

    <p>Contact CTA</p>
  `,
  styles: [
  ]
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
