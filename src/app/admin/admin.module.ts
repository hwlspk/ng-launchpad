import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';

import { AdminOverviewComponent } from './views/admin-overview.component';
import { DashboardComponent } from './views/dashboard.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminOverviewComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
