import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/product.model';
import * as CartActions from '../actions/cart.actions';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface State {
  items: CartItem[];
}

export const initialState: State = {
  items: []
};

export const reducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { product }) => {
    const existingItem = state.items.find(item => item.product.id === product.id);
    
    if (existingItem) {
      return {
        ...state,
        items: state.items.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      };
    } else {
      return {
        ...state,
        items: [...state.items, { product, quantity: 1 }]
      };
    }
  }),
  on(CartActions.removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter(item => item.product.id !== productId)
  })),
  on(CartActions.clearCart, state => ({
    ...state,
    items: []
  }))
);
