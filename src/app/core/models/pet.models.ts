import { Observation } from "./observation.models";
import { Vaccine } from "./vaccine.models";

export interface Pet {
    _id?: string,
    name: string,
    age?: number,
    breed: string,
    species: string,
    color: string,
    chipNumber: string,
    gender: string,
    dateBirth?: Date,
    vaccinationHistory?: string[] | Vaccine[],
    observationHisotry?: string[] | Observation[],
    createdAt?: Date,
    updatedAt?: Date
};