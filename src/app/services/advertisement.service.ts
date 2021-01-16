import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Advertisement } from "../classes/Advertisement";

//import {MOCK_DATA_BUSINESS } from "../classes/mockData/businessMock";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { buffer, catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AdvertisementService {

    private businessAPI_URL = 'http://localhost:8080';
    private advertisementPart = '/advertisements';

    constructor(private http: HttpClient) { }

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    getAdvertisements() : Observable<Advertisement[]> {
        return this.http.get<Advertisement[]>(this.businessAPI_URL + this.advertisementPart);
    }
}
