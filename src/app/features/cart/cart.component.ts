import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  selectCartItems,
  selectCartTotal,
} from '../../core/store/cart/cart.selectors';
import { removeFromCart, clearCart } from '../../core/store/cart/cart.actions';
import { CartItem } from '../../core/models/cart.model';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems$: Observable<CartItem[]>;
  cartTotal$: Observable<number>;

  constructor(private store: Store, private matIconRegistry: MatIconRegistry) {
    // Transform Product[] to CartItem[]
    this.cartItems$ = this.store.select(selectCartItems).pipe(
      map((products: Product[]) =>
        products.map((product) => ({
          product,
          quantity: 1,
        }))
      )
    );

    this.cartTotal$ = this.store.select(selectCartTotal);

    // Register Material icons
    this.matIconRegistry.setDefaultFontSetClass('material-icons');
  }

  clearCart() {
    this.store.dispatch(clearCart());
  }
  removeItem(productId: number) {
    this.store.dispatch(removeFromCart({ productId }));
  }
}
