import { User } from "./User";
import { Business } from "./Business";

export interface Advertisement {
    id : number;
    
    status : string;
    placeDate : Date;
    likes : number;
    dislikes : number;
    
    user : User;
    business : Business;
}