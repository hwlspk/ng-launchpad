import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAreaComponent } from './admin-area.component';

import { AdminPanelComponent } from './components/admin-panel.component';
import { DashboardComponent } from './views/dashboard.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminAreaComponent,
    children: [
      { path: '', component: AdminPanelComponent },
      {
        path: 'resources',
        loadChildren: () => import('./subareas/resource-area/resource-area.module').then(m => m.ResourceAreaModule)
      },
      { path: 'dashboard', component: DashboardComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminAreaRoutingModule { }
