import { User } from "./user.models";

export interface DateModel {
    _id?: string,
    day: string,
    block: string,
    user: User,
    createdAt?: Date,
    updatedAt?: Date
};