export interface Product extends Document {
  id?: string;
  imageUrl: string;
  brand: string;
  name: string;
  description: string;
  stock: number;
  sale: boolean;
}
