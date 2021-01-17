import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Advertisement } from "../classes/Advertisement";
import { Business } from "../classes/Business";
import { User } from "../classes/User";

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AdvertisementService {

    private businessAPI_URL = 'http://localhost:8080';    

    constructor(private http: HttpClient,
        private userService : UserService) { }

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    getAdvertisement(id : number) : Observable<Advertisement> {
        return this.http.get<Advertisement>(this.businessAPI_URL + "/advertisement/{{id}}" );
    }

    getAdvertisements() : Observable<Advertisement[]> {
        return this.http.get<Advertisement[]>(this.businessAPI_URL + "/advertisements" );
    }

    placeUserAdvertisement(business : Business) : Observable<Advertisement>{
        console.log(business.id);

        return this.http.post<Advertisement>(this.businessAPI_URL + "/user/advertisement/place", business, this.httpOptions);
    }

    placeExpertAdvertisement(business : Business) : Observable<Advertisement> {
        console.log("try to send");
        return this.http.post<Advertisement>(this.businessAPI_URL + "/expert/advertisement/place", business, this.httpOptions);
    }    

    getUserAdvertisements() : Observable<Advertisement[]> {
        return this.http.post<Advertisement[]>(this.businessAPI_URL + "/user/advertisements", null, this.httpOptions);
    }

    getAdminAdvertisements() : Observable<Advertisement[]> {
        //let _user = {} as User;;
        //this.userService.getSelf().subscribe(user => {_user = user});
        console.log("send");
        return this.http.get<Advertisement[]>(this.businessAPI_URL + "/admin/advertisements");
    }

    getExpertAdvertisements() : Observable<Advertisement[]> {
        //let _user = {} as User;;
        //this.userService.getSelf().subscribe(user => {_user = user});
        
        return this.http.get<Advertisement[]>(this.businessAPI_URL + "/expert/advertisements");
    }

    acceptAdvertisement(businessId : number) : Observable<Advertisement> {
        return this.http.get<Advertisement>(this.businessAPI_URL + "/admin/advertisement/accept/" + String(businessId));        
    }
    rejectAdvertisement(businessId : number) : Observable<Advertisement> {
        return this.http.get<Advertisement>(this.businessAPI_URL + "/admin/advertisement/reject/" + String(businessId));        
    }

    finishAdvertisement(businessId : number) {
        return this.http.post(this.businessAPI_URL + "/user/finish/advertisement/" + String(businessId), null).subscribe();
    }
}
