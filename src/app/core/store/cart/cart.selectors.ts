import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from '../../models/cart.model';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

export const selectCartItemsCount = createSelector(
  selectCartItems,
  (items) => items.length
);

export const selectCartTotal = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.price, 0)
);
