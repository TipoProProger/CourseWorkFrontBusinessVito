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

        if (sessionStorage.getItem("user") == null) {
            console.log("in if");
            this.checkUser(this.auth.decodedTokenInfo.email).subscribe(user => {
                sessionStorage.setItem("user", JSON.stringify(user));
            });
            return of(JSON.parse(sessionStorage.getItem("user")));
        } else {
            console.log(sessionStorage.getItem("user"));
            console.log("after if");
            return of(JSON.parse(sessionStorage.getItem("user")));
        }
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(this.businessAPI_URL + this.userPart + String(id));
    }

    checkUser(email: string): Observable<User> {
        ///TODO
        //сначала нужно заполнить информацию о пользователе
        //потом отправить
        //или сделать отправку запроса на keycloak сервер со стороны своего сервера
        //он в этот момент произведет синхронизацию
        let user = {} as User;
        user.email = email;

        console.log(email);
        return this.http.post<User>(this.businessAPI_URL + this.userPart, user, this.httpOptions);
    }
}
