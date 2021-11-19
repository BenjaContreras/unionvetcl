export interface Product {
  _id?: string,
  imageUrl?: string,
  brand: string,
  name: string,
  description: string,
  category: string,
  stock?: number,
  sale?: boolean,
  createdAt?: Date,
  updatedAt?: Date
};
