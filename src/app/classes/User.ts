import { Role } from "./Role";

export interface User {
    id : number;
    fio : string;
    telephoneNumber : string;
    email : string;    
    role : Role;
}