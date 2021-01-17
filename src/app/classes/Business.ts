import { BusinessExtended, createEmptyBusinessExtended } from "./BusinessExtended";
import { Approvement, createEmptyApprovement } from "./Approvement";
import { Okopf, createEmptyOkopf } from "./Okopf";
import { Okfs, createEmptyOkfs } from "./Okfs";

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

export function createEmptyBusiness() : Business {
    return {   
        id: null,

        shortName: null,
        fullName: null,
        cost: null,
        busEmail: null,
        okopf: null,
        okfs: null,
        ogrn: null,
        inn: null,
        okato: null,
        taxDebt: null,
        courtCases: null,

        okopfDict: createEmptyOkopf(),
        okfsDict : createEmptyOkfs(),

        approvement : createEmptyApprovement(),
        businessExtended : createEmptyBusinessExtended()
    }
}