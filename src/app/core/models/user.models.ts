import { Address } from "./address.models";
import { Pet } from "./pet.models";

export interface User {
    _id?: string,
    firstName: string,
    lastName: string,
    email: string,
    address: Address,
    phone: string,
    rut: string,
    isVerified?: boolean,
    lastConnection?: Date,
    pets?: string[] | Pet[],
    appointments?: string[],
    role?: string,
    createdAt?: Date,
    updatedAt?: Date,
};