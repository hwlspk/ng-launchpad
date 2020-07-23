import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAreaRoutingModule } from './admin-area-routing.module';

import { AdminAreaComponent } from './admin-area.component';

import { AdminPanelComponent } from './components/admin-panel.component';
import { DashboardComponent } from './views/dashboard.component';

@NgModule({
  declarations: [
    AdminAreaComponent,
    AdminPanelComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminAreaRoutingModule
  ]
})
export class AdminAreaModule { }
