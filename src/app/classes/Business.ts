import { BusinessExtended } from "./BusinessExtended";
import { Approvement } from "./Approvement";
import { Okopf } from "./Okopf";
import { Okfs } from "./Okfs";

export interface Business {
    
    id: number;
    
    shortName : string;
    fullName : string;
    cost : number;
    busEmail : string;
    okopf : string;
    okfs : string;
    ogrn : string;
    inn : string;
    okato : string;
    taxDebt : number;
    courtCases : number;

    okopfDict : Okopf;
    okfsDict : Okfs;

    approvement : Approvement;
    businessExtended : BusinessExtended;    
}