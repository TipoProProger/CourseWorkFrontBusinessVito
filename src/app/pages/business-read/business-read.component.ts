import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Business } from "../../classes/Business";

import { BusinessService } from "../../services/business.service";
import { AdvertisementService } from "../../services/advertisement.service";
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-business-read',
    templateUrl: './business-read.component.html',
    styleUrls: ['./business-read.component.css']
})
export class BusinessReadComponent implements OnInit {

    public business: Business;
    public userRole: string;
    public taxesScan: boolean;
    public courtsScan: boolean;

    constructor(private businessService: BusinessService,
        private advertisementService: AdvertisementService,
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location) { }

    //и для пользователя (текущий вариант)
    //и для эксперта (добавляются галочки. Остальное только для чтения)
    //и для модератора (доавляются кнопки. Остальное только для чтения)

    ngOnInit(): void {
        this.userService.getSelf().subscribe(user => {
            this.userRole = user.role.name;
            console.log(this.userRole);
        });
        this.getBusiness();
    }

    getBusiness(): void {
        const id = + this.route.snapshot.paramMap.get('id');
        this.businessService.getBusiness(id).subscribe(business => {
            this.business = business;
            this.taxesScan = this.business.approvement.scanTaxsApr != 0;
            this.courtsScan = this.business.approvement.scanCourtApr != 0;
        });
    }

    goBack(): void {
        this.location.back();
    }

    onExpertSubmit() {
        this.business.approvement.scanTaxsApr = (this.taxesScan ? 1 : 0);
        this.business.approvement.scanCourtApr = (this.courtsScan ? 1 : 0);
        this.advertisementService.placeExpertAdvertisement(this.business).subscribe(() => {
            this.location.back();   
        });
    }

    onSubmitPlace() {
        this.advertisementService.acceptAdvertisement(this.business.id).subscribe(() => {
            this.location.back();
        });
    }

    onSubmitReject() {
        this.advertisementService.rejectAdvertisement(this.business.id).subscribe(() => {
            this.location.back();
        });
    }

}
