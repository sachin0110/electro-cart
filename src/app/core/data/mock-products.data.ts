import { ProductType, PriceRange } from '../models/product.model';

// Price ranges
export const mockPriceRanges: PriceRange[] = [
  { id: 1, min: 0, max: 500, label: 'Under $500' },
  { id: 2, min: 500, max: 1000, label: '$500 - $1000' },
  { id: 3, min: 1000, max: 2000, label: '$1000 - $2000' },
  { id: 4, min: 2000, max: null, label: 'Over $2000' },
];

// Product types
export const mockProductTypes: ProductType[] = [
  'All',
  'TVs',
  'Appliances',
  'Phones',
  'Video Games',
  'Computers',
  'Audio',
];
