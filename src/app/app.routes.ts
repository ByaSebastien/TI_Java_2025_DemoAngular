import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'product/details',
    loadComponent: () =>
      import('./features/product/pages/product-details/product-details.component').then(m => m.ProductDetailsComponent),
  }
];
