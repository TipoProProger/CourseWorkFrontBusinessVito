import { Component, OnInit } from '@angular/core';

import { Advertisement } from "../../classes/Advertisement";
import { AdvertisementService } from "../../services/advertisement.service";

import { AuthConfigService } from "../../services/auth-config.service";

@Component({
    selector: 'app-advertisement-list',
    templateUrl: './advertisement-list.component.html',
    styleUrls: ['./advertisement-list.component.css']
})
export class AdvertisementListComponent implements OnInit {

    //all advertisements

    ///TODO
    // page loading system (last thing)
    //fuck it till the end
    
    public advertisements : Advertisement[];

    constructor(private advertisementService : AdvertisementService) { }

    ngOnInit(): void {
        this.getAdvertisementList();
    }

    getAdvertisementList(): void {
        this.advertisementService.getAdvertisements().subscribe(advertisements => this.advertisements = advertisements);        
    }

}
