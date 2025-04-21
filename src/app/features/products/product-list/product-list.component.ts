import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { ProductService } from '../../../core/services/product.service';
import {
  Product,
  ProductType,
  PriceRange,
  ProductFilters,
} from '../../../core/models/product.model';
import { addToCart } from '../../../core/store/cart/cart.actions';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    MatGridListModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  filterForm: FormGroup;
  products$ = new BehaviorSubject<Product[]>([]);
  productTypes$;
  priceRanges$;
  currentPage = 1;
  pageSize = 10;
  totalProducts = 0;
  selectedPriceRanges: number[] = [];

  constructor(
    private productService: ProductService,
    private store: Store,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      searchText: [''],
      type: ['All'],
    });
    this.productTypes$ = this.productService.getProductTypes();
    this.priceRanges$ = this.productService.getPriceRanges();
  }

  ngOnInit() {
    this.setupFilterSubscription();
  }

  private setupFilterSubscription() {
    this.filterForm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(() => {
        this.currentPage = 1;
        this.loadProducts();
      });

    // Initial load
    this.loadProducts();
  }

  private loadProducts() {
    const filters: ProductFilters = {
      searchText: this.filterForm.get('searchText')?.value || '',
      type: this.filterForm.get('type')?.value || 'All',
      priceRanges: this.selectedPriceRanges,
    };

    this.productService
      .getProducts(filters, this.currentPage, this.pageSize)
      .subscribe((response) => {
        if (this.currentPage === 1) {
          this.products$.next(response.products);
        } else {
          this.products$.next([...this.products$.value, ...response.products]);
        }
        this.totalProducts = response.total;
      });
  }

  get hasMoreProducts(): boolean {
    return this.products$.value.length < this.totalProducts;
  }

  loadMore() {
    this.currentPage++;
    this.loadProducts();
  }

  isRangeSelected(rangeId: number): boolean {
    return this.selectedPriceRanges.includes(rangeId);
  }

  togglePriceRange(rangeId: number) {
    const index = this.selectedPriceRanges.indexOf(rangeId);
    if (index === -1) {
      this.selectedPriceRanges.push(rangeId);
    } else {
      this.selectedPriceRanges.splice(index, 1);
    }
    this.currentPage = 1;
    this.loadProducts();
  }

  openProductDetails(product: Product) {
    // Create a new instance to ensure clean state
    this.dialog.closeAll();

    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '900px',
      maxWidth: '95vw',
      position: { top: '50px' },
      hasBackdrop: true,
      data: product,
    });

    // Use afterClosed to handle subscription cleanup
    const subscription = dialogRef.componentInstance.addToCart.subscribe(() => {
      this.store.dispatch(addToCart({ product }));
      this.snackBar.open('Product added to cart!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['custom-snackbar'],
      });
      dialogRef.close();
    });

    // Clean up subscription when dialog closes
    dialogRef.afterClosed().subscribe(() => {
      subscription.unsubscribe();
    });
  }
}
