import { Component, OnInit } from '@angular/core';

import { products } from '../mocks/products';

@Component({
  selector: 'lcd-products-list',
  template: `
    <h3>Products</h3>

    <div *ngFor="let product of products; index as productId">
      <h4>
        <a [title]="product.name + ' details'" [routerLink]="['./', 'products', productId]">  
          {{ product.name }}
        </a>
      </h4>

      <p *ngIf="product.description">
        <b>Description</b>: {{ product.description }}
      </p>

      <div>
        <button (click)="addToCart()">
          Add to cart
        </button>
      </div>

      <lcd-product-alert
        [product]="product"
        (notify)="onNotify()">
      </lcd-product-alert>
    </div>
  `,
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    window.alert('The product has been added! Check your cart!');
  }

  onNotify() {
    window.alert('You will be notified when the product is available');
  }
}
