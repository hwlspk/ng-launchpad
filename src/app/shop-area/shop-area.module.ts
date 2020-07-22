import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShopAreaRoutingModule } from './shop-area-routing.module';

import { ShopAreaComponent } from './shop-area.component';
import { ProductsListComponent } from './components/products-list.component';
import { ProductDetailsComponent } from './components/product-details.component';
import { ProductAlertComponent } from './components/product-alert.component';
import { CartComponent } from './components/cart.component';
import { ShippingComponent } from './components/shipping.component';


@NgModule({
  declarations: [
    ShopAreaComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    ProductAlertComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    ShopAreaRoutingModule
  ]
})
export class ShopAreaModule { }
