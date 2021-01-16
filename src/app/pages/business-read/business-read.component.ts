import { Component, OnInit } from '@angular/core';

import { Business } from "../../classes/Business"; 

import { BusinessService } from "../../services//business.service";
import { AuthConfigService } from "../../services/auth-config.service";

@Component({
    selector: 'app-business-read',
    templateUrl: './business-read.component.html',
    styleUrls: ['./business-read.component.css']
})
export class BusinessReadComponent implements OnInit {

    public business : Business;

    constructor(private businessService: BusinessService,
        private readonly auth : AuthConfigService) { }

    //и для пользователя (текущий вариант)
    //и для эксперта (добавляются галочки. Остальное только для чтения)
    //и для модератора (доавляются кнопки. Остальное только для чтения)
    
    ngOnInit(): void {
        console.log(this.auth.decodedAccessToken);
        console.log(this.auth.decodedIDToken);
        this.getBusiness(12);///FIXME
    }

    getBusiness(id: number): void {
        this.businessService.getBusiness(id).subscribe(business => this.business = business);
    }

}
