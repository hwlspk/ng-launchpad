import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceAreaRoutingModule } from './resource-area-routing.module';

import { ResourceAreaComponent } from './resource-area.component';
import { ResourceIndexComponent } from './views/resource-index.component';

import { UserContainerComponent } from './user/user-container.component';
import { UserListComponent } from './user/user-list.component';


@NgModule({
  declarations: [
    ResourceAreaComponent,
    ResourceIndexComponent,
    UserContainerComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ResourceAreaRoutingModule
  ]
})
export class ResourceAreaModule { }
