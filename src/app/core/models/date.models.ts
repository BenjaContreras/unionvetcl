import { User } from "./user.models";

export interface Time {
    day: number;
    month: number;
    year: number;
};
export interface DateModel {
    _id?: string,
    date: Time,
    block: number,
    user: User,
    createdAt?: Date,
    updatedAt?: Date
};