import { Component, OnInit } from '@angular/core';

import { CartService } from '../services/cart.service';


@Component({
  selector: 'lcd-shipping',
  template: `
    <h2>Shipping</h2>

    <div class="shipping-item" *ngFor="let shipping of shippingCosts | async">
      <span>{{ shipping.type }}</span>
      &nbsp;&nbsp;&nbsp;
      <span>{{ shipping.price | currency }}</span>
    </div>
  `,
  styles: [
  ]
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
