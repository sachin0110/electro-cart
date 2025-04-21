import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CartState, ProductState, cartReducer, productReducer } from './reducers';

export interface AppState {
  products: ProductState;
  cart: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: productReducer,
  cart: cartReducer
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
