import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

import { AdminOverviewComponent } from './views/admin-overview.component';
import { DashboardComponent } from './views/dashboard.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { 
        path: '',
        component: AdminOverviewComponent
      },
      {
        path: 'resources', // sources, data-sources
        loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule)
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
export class AdminRoutingModule { }
