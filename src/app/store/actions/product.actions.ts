import { createAction, props } from '@ngrx/store';
import { Product, ProductType } from '../../core/models/product.model';

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);

export const setSearchTerm = createAction(
  '[Product] Set Search Term',
  props<{ searchTerm: string }>()
);

export const setProductType = createAction(
  '[Product] Set Product Type',
  props<{ productType: ProductType }>()
);

export const setPriceRanges = createAction(
  '[Product] Set Price Ranges',
  props<{ priceRanges: string[] }>()
);

export const setCurrentPage = createAction(
  '[Product] Set Current Page',
  props<{ page: number }>()
);
