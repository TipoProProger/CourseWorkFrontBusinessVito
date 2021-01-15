import { User } from "./User"

export interface Approvement {
    id : number;

    number : string;
    date : Date;
    info : string;
    scanTaxsApr : number;
    scanCourtApr : number;
    user : User;
}