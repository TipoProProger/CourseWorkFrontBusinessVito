import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from "../classes/User";

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private businessAPI_URL = 'http://localhost:8080';
    private userPart = '/users';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    getSelf(): Observable<User> {
        if (sessionStorage.getItem("user") != null) {
            return of(JSON.parse(sessionStorage.getItem("user")));
        }
                
        return this.http.get<User>(this.businessAPI_URL + this.userPart);
    }
    
}
