import { Component, OnInit } from '@angular/core';
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

    constructor(private advertisementService : AdvertisementService) { }

    ngOnInit(): void {
        this.getAdvertisementList();
    }

    getAdvertisementList(): void {        
        this.advertisementService.getUserAdvertisements().subscribe(advertisements => this.advertisements = advertisements);        
    }

    //delete advertisement
    onDelete() {

    }

    //add new advertisement
    onAdd() {

    }
}
