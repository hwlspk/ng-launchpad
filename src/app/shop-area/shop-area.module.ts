import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopAreaRoutingModule } from './shop-area-routing.module';

import { ShopAreaComponent } from './shop-area.component';


@NgModule({
  declarations: [
    ShopAreaComponent
  ],
  imports: [
    CommonModule,
    ShopAreaRoutingModule
  ]
})
export class ShopAreaModule { }
