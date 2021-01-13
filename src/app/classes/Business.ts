export interface Business {
    id: number;
    
    shortName : string;
    fullName : string;
    price : number;
    email : string;
    okopf : string;
    okfs : string;
    ogrn : string;
    inn : string;
    okato : string;
    taxDebt : number;
    courtCases : number;

    telephoneNumber : string;
    site : string;
    kpp : string;
    okpo : string;
    oktmo : string;
    regDate : Date;
    director : string;
    amountWorkers : number;
    mainActivity : string;
    taxAgency : string;
    founders : string;
    taxes : number;
    profit : number;

    address : string;
    authorizedCapital : string;

    //scanTaxes
    //scanCourt
}