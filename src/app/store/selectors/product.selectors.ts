import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from '../reducers/product.reducer';
import { ProductType } from '../../models/product.model';

export const selectProductState = createFeatureSelector<fromProduct.State>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  state => state.products
);

export const selectLoading = createSelector(
  selectProductState,
  state => state.loading
);

export const selectError = createSelector(
  selectProductState,
  state => state.error
);

export const selectSearchTerm = createSelector(
  selectProductState,
  state => state.searchTerm
);

export const selectProductType = createSelector(
  selectProductState,
  state => state.productType
);

export const selectPriceRanges = createSelector(
  selectProductState,
  state => state.priceRanges
);

export const selectCurrentPage = createSelector(
  selectProductState,
  state => state.currentPage
);

export const selectFilteredProducts = createSelector(
  selectAllProducts,
  selectSearchTerm,
  selectProductType,
  selectPriceRanges,
  (products, searchTerm, productType, priceRanges) => {
    let filtered = [...products];
    
    // Filter by product type
    if (productType !== ProductType.All) {
      filtered = filtered.filter(product => product.type === productType);
    }
    
    // Filter by price ranges
    if (priceRanges.length > 0) {
      filtered = filtered.filter(product => {
        return priceRanges.some(rangeId => {
          const [min, max] = rangeId.split('-').map(Number);
          return product.price >= min && (max ? product.price <= max : true);
        });
      });
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      );
    }
    
    return filtered;
  }
);

export const selectPaginatedProducts = createSelector(
  selectFilteredProducts,
  selectCurrentPage,
  (products, page) => {
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    return products.slice(startIndex, startIndex + pageSize);
  }
);

export const selectTotalPages = createSelector(
  selectFilteredProducts,
  (products) => {
    const pageSize = 10;
    return Math.ceil(products.length / pageSize);
  }
);
