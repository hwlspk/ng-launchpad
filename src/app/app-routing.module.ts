import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './views/home-page.component';
import { AboutPageComponent } from './views/about-page.component';
import { ContactPageComponent } from './views/contact-page.component';
import { BlogPageComponent } from './views/blog-page.component';
import { NotFoundPageComponent } from './views/not-found-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'prefix' },
  { path: 'about', component: AboutPageComponent, pathMatch: 'prefix' },
  { path: 'contact', component: ContactPageComponent, pathMatch: 'prefix' },
  { 
    path: 'blog',
    component: BlogPageComponent, pathMatch: 'prefix'
  },

  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  },

  { path: '404', component: NotFoundPageComponent, pathMatch: 'prefix' },

  { path: 'home', redirectTo: '/', pathMatch: 'prefix' },
  { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: '**', component: NotFoundPageComponent } // Wildcard route for a 404 page
  // { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    /*
      configuration of the router at the application's root level.
      the forRoot() method supplies the service providers and directives needed for routing
      performing the initial setup
    */
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false // <-- debugging purposes only
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
