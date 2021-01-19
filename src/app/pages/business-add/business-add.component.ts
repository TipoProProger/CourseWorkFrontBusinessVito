import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AdvertisementService } from 'src/app/services/advertisement.service';
import { BusinessService } from "../../services//business.service";

import { Business, createEmptyBusiness } from "../../classes/Business";

@Component({
  selector: 'app-business-add',
  templateUrl: './business-add.component.html',
  styleUrls: ['./business-add.component.css']
})
export class BusinessAddComponent implements OnInit {

    //создать новое объявления
    public business: Business;
    public error: boolean;

    constructor(private advertisementService: AdvertisementService,
        private location: Location) { }

    onSubmit(businessForm: NgForm) {
        if (businessForm.valid) {
            console.log(this.business);
            this.advertisementService.placeUserAdvertisement(this.business).subscribe(answer => {
                if (answer == null) {
                    this.error = true;
                } else {
                    this.goBack();
                }
            });
        }
    }
    
    ngOnInit(): void {
        this.business = createEmptyBusiness();            
    }

    goBack(): void {
        this.location.back();
    }
}
