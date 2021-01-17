import { User, createEmptyUser } from "./User"

export interface Approvement {
    id : number;

    number : string;
    date : Date;
    info : string;
    scanTaxsApr : number;
    scanCourtApr : number;
    user : User;
}

export function createEmptyApprovement() : Approvement {
    return {
        id : null,

        number :null,
        date : null,
        info : null,
        scanTaxsApr : null,
        scanCourtApr : null,
        user : createEmptyUser()
    }
}