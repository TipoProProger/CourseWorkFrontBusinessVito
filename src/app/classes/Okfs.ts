export interface Okfs {
    number : string;
    name : string;    
}

export function createEmptyOkfs() : Okfs {
    return {
        number : null,
        name : null
    }
}