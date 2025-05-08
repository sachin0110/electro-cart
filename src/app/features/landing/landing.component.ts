import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { Store } from '@ngrx/store';
import { appVersion } from '../../../environments/version';
import { selectCartItemsCount } from '../../core/store/cart/cart.selectors';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatBadgeModule,
    ProductListComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  title = 'electro-cart';
  cartItemsCount$;
  currentAppVersion: string = '';
  constructor(private store: Store, private matIconRegistry: MatIconRegistry) {
    this.cartItemsCount$ = this.store.select(selectCartItemsCount);
    this.currentAppVersion = appVersion ?? 'Unknown';
    // Register Material icons
    this.matIconRegistry.setDefaultFontSetClass('material-icons');
  }
}
