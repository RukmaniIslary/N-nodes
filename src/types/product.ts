export interface Product {
  id: string;

  name: string;
  description?: string;

  image: string;

  model?: string;

  price: number;

  rating?: number;

  category: string;

  stock?: number;

  featured?: boolean;
}