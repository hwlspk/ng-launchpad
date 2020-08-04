import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './components/product-details.component';
import { CartComponent } from './components/cart.component';
import { ShippingComponent } from './components/shipping.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
