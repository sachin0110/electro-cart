import { Product } from './product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: Product[];
}

export interface CartSummary {
  totalItems: number;
  totalPrice: number;
}
