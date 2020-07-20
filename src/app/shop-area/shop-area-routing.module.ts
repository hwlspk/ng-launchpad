import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopAreaComponent } from './shop-area.component';

const routes: Routes = [
  { path: '', component: ShopAreaComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopAreaRoutingModule { }
