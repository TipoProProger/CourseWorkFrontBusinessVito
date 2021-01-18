import { Component, OnInit } from '@angular/core';

import { Advertisement } from "../../classes/Advertisement";
import { AdvertisementService } from "../../services/advertisement.service";

@Component({
    selector: 'app-advertisement-list',
    templateUrl: './advertisement-list.component.html',
    styleUrls: ['./advertisement-list.component.css']
})
export class AdvertisementListComponent implements OnInit {

    public advertisements : Advertisement[];

    constructor(private advertisementService : AdvertisementService) { }

    ngOnInit(): void {
        this.getAdvertisementList();
    }

    getAdvertisementList(): void {        
        this.advertisementService.getAdvertisements().subscribe(advertisements => this.advertisements = advertisements);        
    }

}
