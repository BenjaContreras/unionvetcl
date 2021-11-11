export interface Contact {
  id?: string,
  isReaded?: boolean,
  fullName: string,
  phone: string,
  email: string,
  message: string,
  createdAt?: Date,
  updatedAt?: Date
};