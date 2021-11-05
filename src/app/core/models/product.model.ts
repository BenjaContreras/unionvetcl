export interface Product {
  id?: string,
  imageUrl: string,
  brand: string,
  name: string,
  description: string,
  stock: number,
  sale?: boolean,
  createdAt?: Date,
  updatedAt?: Date
};
