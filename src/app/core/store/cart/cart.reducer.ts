import { createReducer, on } from '@ngrx/store';
import { CartState } from '../../models/cart.model';
import * as CartActions from './cart.actions';

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { product }) => ({
    ...state,
    items: [...state.items, product],
  })),
  on(CartActions.removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== productId),
  })),
  on(CartActions.clearCart, (state) => ({
    ...state,
    items: [],
  }))
);
