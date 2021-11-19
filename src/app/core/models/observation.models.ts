import { Pet } from "./pet.models";
import { Vaccine } from "./vaccine.models";

export interface Observation {
    _id?: string,
    idPet: Pet | string,
    doctor: string,
    motive: string,
    weight: number,
    preDiagnostic?: string,
    anamnesis?: string,
    diagnostic?: string,
    treatment?: string,
    vaccines?: string[] | Vaccine[],
    createdAt?: Date,
    updatedAt?: Date
};