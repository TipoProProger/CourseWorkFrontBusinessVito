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

export function createEmptyBusinessExtended() :BusinessExtended {
    return {
        id : null,

        telephone : null,
        site : null,
        adress : null,
        authorizedCapital :null,
        kpp : null,
        okpo : null,
        oktmo : null,
        regDate : null,
        director : null,
        amountWorkers : null,
        mainActivity : null,
        taxAgency : null,
        founders : null,
        taxes : null,
        profit : null,
        scanTaxes : null,
        scanCourt : null
    }
}