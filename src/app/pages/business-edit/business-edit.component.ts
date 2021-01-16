import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Business } from "../../classes/Business";

import { BusinessService } from "../../services//business.service";

@Component({
    selector: 'app-business-edit',
    templateUrl: './business-edit.component.html',
    styleUrls: ['./business-edit.component.css']
})
export class BusinessEditComponent implements OnInit {

    //редактировать и создать новое объявления
    public business: Business;

    constructor(private businessService: BusinessService) { }

    onSubmit(businessForm: NgForm) {
        console.log("push");
        if (businessForm.valid) {
            console.log("Form Submitted!");
            console.log(this.business);
            //this.business.id = null;///FIXME
            ///TO_DO
            ///add Okopf data and Okfs data
            this.businessService.sendBusiness(this.business).subscribe();
        }
    }

    ngOnInit(): void {
        this.getBusiness(12);///FIXME
    }

    getBusiness(id: number): void {
        this.businessService.getBusiness(id).subscribe(business => this.business = business);
    }

}
