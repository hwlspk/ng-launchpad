import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../services/cart.service';


@Component({
  selector: 'lcd-cart',
  template: `
    <h2>Cart</h2>

    <div>
      <a routerLink="/shop/shipping">
        Shipping Prices
      </a>
    </div>

    <br>
    <br />

    <div class="cart-item" *ngFor="let item of items">
      <span>{{ item.name }}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <span>{{ item.price | currency }}</span>
    </div>

    <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit(checkoutForm.value)">
      <div>
        <label for="name">Name</label>
        <br/>
        <input id="name" type="text" formControlName="name">
      </div>
      <br />
      <div>
        <label for="address">Address</label>
        <br>
        <input id="address" type="text" formControlName="address">
      </div>
      <br>
      <button class="button" type="submit">Purchase</button>
    </form>
  `,
  styles: [
  ]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}
