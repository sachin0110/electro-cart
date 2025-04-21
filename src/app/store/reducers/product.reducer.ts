import { createReducer, on } from '@ngrx/store';
import { Product, ProductType } from '../../models/product.model';
import * as ProductActions from '../actions/product.actions';

export interface State {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: any;
  searchTerm: string;
  productType: ProductType;
  priceRanges: string[];
  currentPage: number;
}

export const initialState: State = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  searchTerm: '',
  productType: ProductType.All,
  priceRanges: [],
  currentPage: 1
};

export const reducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    filteredProducts: products,
    loading: false
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(ProductActions.setSearchTerm, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
    currentPage: 1
  })),
  on(ProductActions.setProductType, (state, { productType }) => ({
    ...state,
    productType,
    currentPage: 1
  })),
  on(ProductActions.setPriceRanges, (state, { priceRanges }) => ({
    ...state,
    priceRanges,
    currentPage: 1
  })),
  on(ProductActions.setCurrentPage, (state, { page }) => ({
    ...state,
    currentPage: page
  }))
);
