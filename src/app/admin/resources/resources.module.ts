import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { ResourcesRoutingModule } from './resources-routing.module';

import { ResourcesComponent } from './resources.component';

import { UserOverviewComponent } from './user/user-overview.component';
import { UserListingComponent } from './user/user-listing.component';
import { UserDetailComponent } from './user/user-detail.component';

import { UserNavigationComponent } from './user/sections/user-navigation.component';
import { UserItemComponent } from './user/components/user-item.component';


@NgModule({
  declarations: [
    ResourcesComponent, // resource-index
    UserOverviewComponent,
    UserListingComponent,
    UserDetailComponent,
    UserNavigationComponent,
    UserItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
