import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from '../reducers/cart.reducer';

export const selectCartState = createFeatureSelector<fromCart.State>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  state => state.items
);

export const selectCartItemCount = createSelector(
  selectCartItems,
  items => items.reduce((count, item) => count + item.quantity, 0)
);

export const selectCartTotal = createSelector(
  selectCartItems,
  items => items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
);
