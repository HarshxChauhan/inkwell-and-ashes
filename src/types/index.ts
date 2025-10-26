export interface Product {
  id: number;
  name: string;
  category: 'journals' | 'pens' | 'ink' | 'accessories';
  price: number;
  description: string;
  shortDesc: string;
  image: string;
  specs: string[];
}
