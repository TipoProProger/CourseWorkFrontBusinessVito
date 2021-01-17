export interface Okopf {
    number : string;
    name : string;
} 

export function createEmptyOkopf() : Okopf {
    return {
        number: null,
        name: null
    }
}