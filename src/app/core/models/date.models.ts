import { Observation } from "./observation.models";
import { Pet } from "./pet.models";

export interface Time {
    day: number;
    month: number;
    year: number;
};
export interface Appointment {
    _id?: string,
    patient: Pet | string,
    userName?: string,
    userLastName?: string,
    userId?: string,
    state?: number,
    block: number,
    date: Time,
    observations?: string[] | Observation[],
    responsableCancellation?: string,
    motiveCancellation?: string,
    createdAt?: Date,
    updatedAt?: Date
};