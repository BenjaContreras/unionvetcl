import { Pet } from "./pet.models";

export interface Time {
    day: number;
    month: number;
    year: number;
};
export interface DateModel {
    _id?: string,
    date: Time,
    block: number,
    patient: Pet | string,
    createdAt?: Date,
    updatedAt?: Date
};