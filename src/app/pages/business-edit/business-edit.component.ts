import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AdvertisementService } from 'src/app/services/advertisement.service';
import { BusinessService } from "../../services//business.service";

import { Business } from "../../classes/Business";

@Component({
    selector: 'app-business-edit',
    templateUrl: './business-edit.component.html',
    styleUrls: ['./business-edit.component.css']
})
export class BusinessEditComponent implements OnInit {

    //редактировать и создать новое объявления
    public business: Business;

    constructor(private businessService: BusinessService,
        private advertisementService: AdvertisementService,
        private route: ActivatedRoute,
        private location: Location) { }

    onSubmit(businessForm: NgForm) {
        console.log("push");
        if (businessForm.valid) {
            console.log("Form Submitted!");
            console.log(this.business);                        
            this.advertisementService.placeUserAdvertisement(this.business).subscribe();            
        }
    }

    ngOnInit(): void {
        const id = + this.route.snapshot.paramMap.get('id');
        this.getBusiness(id);
    }

    getBusiness(id: number): void {
        this.businessService.getBusiness(id).subscribe(business => this.business = business);
    }

    goBack(): void {
        this.location.back();
    }
}
