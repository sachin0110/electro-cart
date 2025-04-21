import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as CartActions from '../actions/cart.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CartEffects {
  private actions$ = inject(Actions);
  private snackBar = inject(MatSnackBar);

  addToCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.addToCart),
        tap(({ product }) => {
          this.snackBar.open(`${product.name} added to cart`, 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
        })
      ),
    { dispatch: false }
  );
}
