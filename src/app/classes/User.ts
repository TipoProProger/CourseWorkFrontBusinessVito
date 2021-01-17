import { Role } from "./Role";

export interface User {
    id: number;
    fio: string;
    telephoneNumber: string;
    email: string;
    role: Role;
}

export function createEmptyUser(): User {
    return {        
        id: null,
        fio: null,
        telephoneNumber: null,
        email: null,
        role: null
    }
}