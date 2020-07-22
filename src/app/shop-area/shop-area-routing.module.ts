import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopAreaComponent } from './shop-area.component';
import { ProductDetailsComponent } from './components/product-details.component';
import { CartComponent } from './components/cart.component';
import { ShippingComponent } from './components/shipping.component';

const routes: Routes = [
  { path: '', component: ShopAreaComponent },
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
export class ShopAreaRoutingModule { }
