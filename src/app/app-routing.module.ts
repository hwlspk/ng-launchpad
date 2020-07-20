import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page.component';
import { BlogPageComponent } from './pages/blog-page.component';
import { AboutPageComponent } from './pages/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'prefix' },
  { path: 'blog', component: BlogPageComponent, pathMatch: 'prefix' },
  { path: 'about', component: AboutPageComponent, pathMatch: 'prefix' },

  {
    path: 'shop',
    loadChildren: () => import('./shop-area/shop-area.module').then(m => m.ShopAreaModule)
  },

  { path: '404', component: NotFoundPageComponent, pathMatch: 'prefix' },

  { path: 'home', redirectTo: '/', pathMatch: 'prefix' },
  { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: '**', component: NotFoundPageComponent } // Wildcard route for a 404 page
  // { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
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
