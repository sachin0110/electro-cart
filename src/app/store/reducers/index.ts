// Barrel file to re-export all reducers with specific names
import * as fromCart from './cart.reducer';
import * as fromProduct from './product.reducer';

// Re-export with specific names to avoid conflicts
export const cartReducer = fromCart.reducer;
export const productReducer = fromProduct.reducer;

// Export state interfaces with specific names
export interface CartState extends fromCart.State {}
export interface ProductState extends fromProduct.State {}
