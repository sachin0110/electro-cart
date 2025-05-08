import { Component } from '@angular/core';
import { AverageRatingChartComponent } from '../common/average-rating-chart/average-rating-chart.component';
import { Product } from '../../core/models/product.model';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin.component.html',
  imports: [AverageRatingChartComponent],
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  products: Product[] = [];
}
