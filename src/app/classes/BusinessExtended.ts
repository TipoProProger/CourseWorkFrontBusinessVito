export interface BusinessExtended {
    id : number;

    telephone : string;
    site : string;
    adress : string;
    authorizedCapital : number;
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
    scanTaxes : Blob;
    scanCourt : Blob;
}