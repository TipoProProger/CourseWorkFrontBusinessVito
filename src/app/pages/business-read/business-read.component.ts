import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Business } from "../../classes/Business";

import { BusinessService } from "../../services/business.service";
import { AdvertisementService } from "../../services/advertisement.service";
import { AuthConfigService } from "../../services/auth-config.service";

@Component({
    selector: 'app-business-read',
    templateUrl: './business-read.component.html',
    styleUrls: ['./business-read.component.css']
})
export class BusinessReadComponent implements OnInit {

    public business: Business;
    public simpleUser = false;
    public expertUser = false;
    public adminUser = false;

    constructor(private businessService: BusinessService,
        private advertisementService : AdvertisementService,
        private readonly auth: AuthConfigService,        
        private route: ActivatedRoute,
        private location: Location) { }

    //и для пользователя (текущий вариант)
    //и для эксперта (добавляются галочки. Остальное только для чтения)
    //и для модератора (доавляются кнопки. Остальное только для чтения)

    ngOnInit(): void {
        this.getBusiness();
        this.simpleUser = this.auth.decodedTokenInfo['user-role-name'].includes('simple-user');     
        this.expertUser = this.auth.decodedTokenInfo['user-role-name'].includes('expert-user');
        this.adminUser = this.auth.decodedTokenInfo['user-role-name'].includes('admin-user');
    }

    getBusiness(): void {
        const id = + this.route.snapshot.paramMap.get('id');
        this.businessService.getBusiness(id).subscribe(business => this.business = business);
    }

    goBack(): void {
        this.location.back();
    }

    onExpertSubmit() {
        this.advertisementService.placeExpertAdvertisement(this.business);
    }

    onSubmitPlace() {
        this.advertisementService.acceptAdvertisement(this.business.id);
    }

    onSubmitReject() {
        this.advertisementService.rejectAdvertisement(this.business.id);
    }

}
