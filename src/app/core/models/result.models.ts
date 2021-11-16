import { Contact } from "./contact.models";
import { DateModel } from "./date.models";
import { Pet } from "./pet.models";
import { Product } from "./product.models";
import { Tip } from "./tip.models";
import { User } from "./user.models";

export interface APIResponse {
    message: string,
    user?: User,
    contact?: Contact,
    product?: Product
    date?: DateModel,
    tip?: Tip,
    pet?: Pet
};