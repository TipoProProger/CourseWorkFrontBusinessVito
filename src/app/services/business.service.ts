import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Business } from "../classes/Business";

//import {MOCK_DATA_BUSINESS } from "../classes/mockData/businessMock";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  private businessAPI_URL = 'http://localhost:8080/test_business_info/';  // URL to web api

  getBusiness(id : number) : Observable<Business> {
      //return of(MOCK_DATA_BUSINESS);///FIXME
      return this.http.get<Business>(this.businessAPI_URL + String(id));
  }
}
