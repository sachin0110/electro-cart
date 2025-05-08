import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Input,
} from '@angular/core';
import * as d3 from 'd3';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-average-rating-chart',
  template: `<div #chart></div>`,
  styleUrls: ['./average-rating-chart.component.scss'],
})
export class AverageRatingChartComponent implements AfterViewInit {
  @ViewChild('chart') private chartContainer!: ElementRef;
  @Input() products: Product[] = [];

  ngAfterViewInit(): void {
    if (this.products.length) {
      this.createChart();
    }
  }

  private createChart(): void {
    const data = this.aggregateRatingsByType(this.products);
    const element = this.chartContainer.nativeElement;
    const margin = { top: 40, right: 20, bottom: 70, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    d3.select(element).selectAll('*').remove(); // Clear previous chart

    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.type))
      .range([0, width])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.avgRating)!])
      .range([height, 0]);

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'rotate(-30)')
      .style('text-anchor', 'end');

    svg.append('g').call(d3.axisLeft(y));

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.type)!)
      .attr('y', (d) => y(d.avgRating))
      .attr('width', x.bandwidth())
      .attr('height', (d) => height - y(d.avgRating))
      .attr('fill', '#db9834');

    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', -10)
      .attr('text-anchor', 'middle')
      .style('font-size', '18px')
      .text('Average Product Rating by Category');
  }

  private aggregateRatingsByType(products: Product[]): {
    type: string;
    avgRating: number;
  }[] {
    const grouped = d3.group(products, (d) => d.type);
    return Array.from(grouped, ([type, items]) => ({
      type,
      avgRating: d3.mean(items, (d) => d.rating) ?? 0,
    }));
  }
}
