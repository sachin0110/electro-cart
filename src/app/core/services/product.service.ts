import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  Product,
  ProductFilters,
  ProductType,
  PriceRange,
} from '../models/product.model';
import { mockPriceRanges, mockProductTypes } from '../data/mock-products.data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private priceRanges: PriceRange[] = mockPriceRanges;
  private apiUrl = 'https://product-api-q8zt.onrender.com/api/products';
  private http = inject(HttpClient);

  getProducts(
    filters: ProductFilters,
    page: number = 1,
    pageSize: number = 10
  ): Observable<{ products: Product[]; total: number }> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map((products) => {
        let filtered = [...products];

        // Apply type filter
        if (filters.type !== 'All') {
          filtered = filtered.filter(
            (product) => product.type === filters.type
          );
        }

        // Apply price range filter
        if (filters.priceRanges.length > 0) {
          filtered = filtered.filter((product) =>
            filters.priceRanges.some((rangeId) => {
              const range = this.priceRanges.find((r) => r.id === rangeId);
              return range
                ? product.price >= range.min &&
                    (range.max === null || product.price <= range.max)
                : false;
            })
          );
        }

        // Apply search text filter
        if (filters.searchText) {
          const searchLower = filters.searchText.toLowerCase();
          filtered = filtered.filter(
            (product) =>
              product.name.toLowerCase().includes(searchLower) ||
              product.type.toLowerCase().includes(searchLower)
          );
        }

        const total = filtered.length;
        const start = (page - 1) * pageSize;
        const paginated = filtered.slice(start, start + pageSize);

        return { products: paginated, total };
      })
    );
  }

  getPriceRanges(): Observable<PriceRange[]> {
    return new Observable((observer) => {
      observer.next(this.priceRanges);
      observer.complete();
    });
  }

  getProductTypes(): Observable<ProductType[]> {
    return new Observable((observer) => {
      observer.next(mockProductTypes);
      observer.complete();
    });
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.http
      .get<Product[]>(this.apiUrl)
      .pipe(map((products) => products.find((p) => p.id === id)));
  }
}
