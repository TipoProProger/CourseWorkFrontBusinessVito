import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Business } from "../classes/Business";

//import {MOCK_DATA_BUSINESS } from "../classes/mockData/businessMock";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { buffer, catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BusinessService {

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    private businessAPI_URL = 'http://localhost:8080/user/business/';  // URL to web api

    getBusiness(id: number): Observable<Business> {
        console.log(this.businessAPI_URL + String(id));
        return this.http.get<Business>(this.businessAPI_URL + String(id));
    }

    sendBusiness(business: Business): Observable<Business> {
        console.log("try to send");
        let url: string = this.businessAPI_URL + "add";
        console.log(url);

        return this.http.post<Business>(url, business, this.httpOptions);
        /*.pipe(map((response: Business) => {
            console.log(response);
        }));*/
    }


}
