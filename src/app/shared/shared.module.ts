import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './components/navigation.component';
import { MessagingComponent } from './components/messaging.component';


@NgModule({
  declarations: [
    NavigationComponent,
    MessagingComponent
  ],
  exports: [
    NavigationComponent,
    MessagingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
