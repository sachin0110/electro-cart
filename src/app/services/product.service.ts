import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map, tap, catchError } from 'rxjs/operators';
import {
  Product,
  ProductFilters,
  ProductType,
  PriceRange,
} from '../core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  private productsLoaded = false;

  private priceRanges: PriceRange[] = [
    { id: 1, min: 0, max: 500, label: 'Under $500' },
    { id: 2, min: 500, max: 1000, label: '$500 - $1000' },
    { id: 3, min: 1000, max: 2000, label: '$1000 - $2000' },
    { id: 4, min: 2000, max: null, label: 'Over $2000' },
  ];

  constructor(private http: HttpClient) {}

  private loadProducts(): Observable<Product[]> {
    if (this.productsLoaded) {
      return of(this.products);
    }

    return this.http
      .get<{ products: Product[] }>('assets/data/products.json')
      .pipe(
        map((response) => response.products),
        tap((products) => {
          this.products = products;
          this.productsLoaded = true;
        }),
        catchError((error) => {
          console.error('Error loading products', error);
          return of([]);
        })
      );
  }

  getProducts(
    filters: ProductFilters,
    page: number = 1,
    pageSize: number = 10
  ): Observable<{ products: Product[]; total: number }> {
    return this.loadProducts().pipe(
      map((allProducts) => {
        let filteredProducts = [...allProducts];

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
        const paginatedProducts = filteredProducts.slice(
          start,
          start + pageSize
        );

        return { products: paginatedProducts, total };
      }),
      delay(300) // Simulate network delay
    );
  }

  getPriceRanges(): Observable<PriceRange[]> {
    return of(this.priceRanges);
  }

  getProductTypes(): Observable<ProductType[]> {
    return of([
      'All',
      'TVs',
      'Appliances',
      'Phones',
      'Video Games',
      'Computers',
      'Audio',
    ]);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.loadProducts().pipe(
      map((products) => products.find((p) => p.id === id)),
      delay(300) // Simulate network delay
    );
  }
}
