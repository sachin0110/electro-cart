import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  Product,
  ProductFilters,
  ProductType,
  PriceRange,
} from '../models/product.model';
import {
  initialMockProducts,
  mockPriceRanges,
  mockProductTypes,
  generateMockProducts,
} from '../data/mock-products.data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private mockProducts: Product[] = [];
  private priceRanges: PriceRange[] = mockPriceRanges;

  constructor() {
    // Initialize the product list with initial products and generate 100 more
    this.mockProducts = [
      ...initialMockProducts,
      ...generateMockProducts(100, initialMockProducts.length + 1),
    ];
  }

  getProducts(
    filters: ProductFilters,
    page: number = 1,
    pageSize: number = 10
  ): Observable<{ products: Product[]; total: number }> {
    let filteredProducts = [...this.mockProducts];

    // Apply type filter
    if (filters.type !== 'All') {
      filteredProducts = filteredProducts.filter(
        (product) => product.type === filters.type
      );
    }

    // Apply price range filter
    if (filters.priceRanges.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        return filters.priceRanges.some((rangeId) => {
          const range = this.priceRanges.find((r) => r.id === rangeId);
          if (!range) return false;
          return (
            product.price >= range.min &&
            (range.max === null || product.price <= range.max)
          );
        });
      });
    }

    // Apply search text filter
    if (filters.searchText) {
      const searchLower = filters.searchText.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.type.toLowerCase().includes(searchLower)
      );
    }

    // Calculate pagination
    const total = filteredProducts.length;
    const start = (page - 1) * pageSize;
    const paginatedProducts = filteredProducts.slice(start, start + pageSize);

    // Simulate network delay
    return of({ products: paginatedProducts, total }).pipe(delay(100));
  }

  getPriceRanges(): Observable<PriceRange[]> {
    return of(this.priceRanges);
  }

  getProductTypes(): Observable<ProductType[]> {
    return of(mockProductTypes);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.mockProducts.find((p) => p.id === id)).pipe(delay(100));
  }
}
