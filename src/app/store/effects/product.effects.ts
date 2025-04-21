import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as ProductActions from '../actions/product.actions';
import { ProductService } from '../../services/product.service';
import { ProductFilters } from '../../core/models/product.model';

@Injectable()
export class ProductEffects {
  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() => {
        const defaultFilters: ProductFilters = {
          searchText: '',
          type: 'All',
          priceRanges: [],
        };

        return this.productService.getProducts(defaultFilters).pipe(
          map((response) =>
            ProductActions.loadProductsSuccess({ products: response.products })
          ),
          catchError((error) =>
            of(ProductActions.loadProductsFailure({ error }))
          )
        );
      })
    )
  );
}
