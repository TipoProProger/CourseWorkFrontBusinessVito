import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { User } from 'src/app/classes/User';
import { Advertisement } from "../../classes/Advertisement";

import { AdvertisementService } from "../../services/advertisement.service";

@Component({
    selector: 'app-my-business-list',
    templateUrl: './user-business-list.component.html',
    styleUrls: ['./user-business-list.component.css']
})
export class UserBusinessListComponent implements OnInit {

    //мои объявления
    public advertisements : Advertisement[];    

    constructor(private router: Router,
        private location: Location,   
        private advertisementService: AdvertisementService) { }

    ngOnInit(): void {
        console.log("i am user-business-list");
        this.getAdvertisementList();        
    }

    getAdvertisementList(): void {  
        console.log("try to load data");      
        this.advertisementService.getUserAdvertisements().subscribe(advertisements => {
            this.advertisements = advertisements;
            console.log("data recieved");
        });        
    }

    //delete advertisement
    onDelete(id : number) {
        console.log(id);
        this.advertisementService.finishAdvertisement(id).subscribe(() => {
            console.log("try to go");                
            this.ngOnInit();
        });    
    }
}
