import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShopRoutingModule } from './shop-routing.module';

import { ShopComponent } from './shop.component';
import { ProductsListComponent } from './components/products-list.component';
import { ProductDetailsComponent } from './components/product-details.component';
import { ProductAlertComponent } from './components/product-alert.component';
import { CartComponent } from './components/cart.component';
import { ShippingComponent } from './components/shipping.component';


@NgModule({
  declarations: [
    ShopComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    ProductAlertComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
