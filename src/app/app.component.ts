import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule, AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { Store } from '@ngrx/store';
import { selectCartItemsCount } from './core/store/cart/cart.selectors';
import { appVersion } from '../environments/version';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
