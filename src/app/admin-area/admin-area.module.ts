import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAreaRoutingModule } from './admin-area-routing.module';
import { AdminAreaComponent } from './admin-area.component';


@NgModule({
  declarations: [
    AdminAreaComponent
  ],
  imports: [
    CommonModule,
    AdminAreaRoutingModule
  ]
})
export class AdminAreaModule { }
