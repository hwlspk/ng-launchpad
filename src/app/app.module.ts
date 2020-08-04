import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser'; // Exports: CommonModule
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';

import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './views/home-page.component';
import { AboutPageComponent } from './views/about-page.component';
import { ContactPageComponent } from './views/contact-page.component';
import { BlogPageComponent } from './views/blog-page.component';
import { NotFoundPageComponent } from './views/not-found-page.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AdminModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    BlogPageComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    ContactPageComponent
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
