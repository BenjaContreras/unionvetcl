import { Appointment } from "./date.models";

export interface Schedule {
    _id?: string,
    startDate?: Date,
    endDate?: Date,
    month: number,
    year: number,
    day: number,
    maxAppointments: number,
    appointments: Appointment[] | string[],
    createdAt?: Date,   
    updatedAt?: Date
}