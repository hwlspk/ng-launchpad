import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourceAreaComponent } from './resource-area.component';

import { ResourceIndexComponent } from './views/resource-index.component';

import { UserContainerComponent } from './user/user-container.component';
import { UserListComponent } from './user/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: ResourceAreaComponent,
    children: [
      { path: '', component: ResourceIndexComponent },
      {
        path: 'user',
        component: UserContainerComponent,
        children: [
          { path: '', component: UserListComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceAreaRoutingModule { }
