export interface Product {
  id: number;
  name: string;
  type: ProductType;
  price: number;
  rating: number;
  image: string;
  description: string;
  reviews: Review[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export enum ProductType {
  TVs = 'TVs',
  Appliances = 'Appliances',
  Phones = 'Phones',
  VideoGames = 'Video Games',
  All = 'All',
}

export interface PriceRange {
  id: string;
  label: string;
  min: number;
  max: number | null;
}
