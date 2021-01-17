import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from "../classes/User";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthConfigService } from './auth-config.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private businessAPI_URL = 'http://localhost:8080';
    private userPart = '/users';

    constructor(private http: HttpClient,
        private readonly auth: AuthConfigService) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    getSelf(): Observable<User> {
        console.log("try to get self");

        if (sessionStorage.getItem("user") != null) {
            return of(JSON.parse(sessionStorage.getItem("user")));
        }
        
        let user = {} as User;
        user.email = this.auth.decodedTokenInfo.email;

        console.log(user.email);

        return this.http.post<User>(this.businessAPI_URL + this.userPart, user, this.httpOptions);
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(this.businessAPI_URL + this.userPart + String(id));
    }
    
}
