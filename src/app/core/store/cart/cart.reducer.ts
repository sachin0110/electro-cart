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
  on(CartActions.removeFromCart, (state, { productId }) => {
    const index = state.items.findIndex((item) => item.id === productId);

    if (index === -1) {
      return state; // no matching item found, return state as is
    }

    return {
      ...state,
      items: [...state.items.slice(0, index), ...state.items.slice(index + 1)],
    };
  }),
  on(CartActions.clearCart, (state) => ({
    ...state,
    items: [],
  }))
);
