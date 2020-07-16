import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-blog-page',
  template: `
    <h2>Blog</h2>

    <p>Articles, News and Announcements.</p>
  `,
  styles: [
  ]
})
export class BlogPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
