export interface Contact {
  _id?: string,
  fullName: string,
  phone: string,
  email: string,
  message: string,
  isReaded?: boolean,
  response?: string,
  createdAt?: Date,
  updatedAt?: Date
};