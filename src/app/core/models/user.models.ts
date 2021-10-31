import { Address } from "./address.models";

export interface User {
    _id?: string,
    fullName: string,
    RUT: string,
    address: Address,
    email: string,
    phone: string,
    createdAt?: Date,
    updatedAt?: Date,
};