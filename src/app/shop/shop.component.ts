import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lcd-shop',
  template: `
    <h2>Shop</h2>

    <div>
      <a routerLink="/shop/cart" class="button">
        <i>↪</i> Checkout
      </a>
    </div>

    <lcd-products-list></lcd-products-list>
  `,
  styles: [
  ]
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
