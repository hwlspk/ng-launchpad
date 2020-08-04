import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../mocks/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'lcd-product-details',
  template: `
    <h2>Product Details</h2>

    <div *ngIf="product">
      <h3 class="top-content">{{ product.name }}</h3>
      <h4>{{ product.price | currency }}</h4>
      <p>{{ product.description }}</p>

      <button (click)="addToCart(product)">Buy</button>
    </div>
  `,
  styles: [
  ]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
