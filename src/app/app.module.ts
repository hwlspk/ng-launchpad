import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser'; // Exports: CommonModule
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page.component';
import { BlogPageComponent } from './pages/blog-page.component';
import { AboutPageComponent } from './pages/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    BlogPageComponent,
    AboutPageComponent,
    NotFoundPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
