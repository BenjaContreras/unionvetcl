export interface Contact {
  _id?: string,
  isReaded?: boolean,
  fullName: string,
  phone: string,
  email: string,
  message: string,
  response?: string,
  createdAt?: Date,
  updatedAt?: Date
};