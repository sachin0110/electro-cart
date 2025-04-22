import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/cart.component').then((m) => m.CartComponent),
  },
  { path: '**', redirectTo: '' },
];
