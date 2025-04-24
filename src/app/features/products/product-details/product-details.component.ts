import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, DatePipe],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Output() addToCart = new EventEmitter<void>();
  activeTab: 'description' | 'reviews' = 'description';

  constructor(
    public dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  onAddToCart() {
    this.addToCart.emit();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
