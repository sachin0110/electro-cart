export type ProductType =
  | 'TVs'
  | 'Appliances'
  | 'Phones'
  | 'Video Games'
  | 'Computers'
  | 'Audio'
  | 'All';

export interface ProductReview {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  type: ProductType;
  price: number;
  rating: number;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
  reviews: ProductReview[];
}

export interface PriceRange {
  id: number;
  min: number;
  max: number | null;
  label: string;
}

export interface ProductFilters {
  searchText: string;
  type: ProductType;
  priceRanges: number[];
}
