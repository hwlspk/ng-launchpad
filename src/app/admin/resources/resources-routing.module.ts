import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourcesComponent } from './resources.component';

import { UserNavigationComponent } from './user/sections/user-navigation.component';
import { UserOverviewComponent } from './user/user-overview.component';
import { UserListingComponent } from './user/user-listing.component';
import { UserDetailComponent } from './user/user-detail.component';

const routes: Routes = [
  { 
    path: '',
    component: ResourcesComponent // resource index, central or overview
  },
  {
    path: 'user',
    component: UserNavigationComponent,
    children: [
      { path: '', component: UserListingComponent },
      { path: 'overview', component: UserOverviewComponent },
      { path: ':id', component: UserDetailComponent }
    ]
  }
  // { path: '', component: ResourcesComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
