import { Component, OnInit } from '@angular/core';

import { Advertisement } from "../../classes/Advertisement";

import { AdvertisementService } from "../../services/advertisement.service";
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-expert-list',
    templateUrl: './expert-list.component.html',
    styleUrls: ['./expert-list.component.css']
})
export class ExpertListComponent implements OnInit {

    public advertisements: Advertisement[];

    constructor(private advertisementService: AdvertisementService,
        private userService: UserService) { }

    ngOnInit(): void {
        this.getAdvertisementList();
    }

    getAdvertisementList(): void {
        let selfRole: string;
        this.userService.getSelf().subscribe(user => {
            selfRole = user.role.name;
            if (selfRole == "Модератор") {
                this.advertisementService.getAdminAdvertisements().subscribe(advertisements => this.advertisements = advertisements);
            } else if (selfRole == "Эксперт") {
                this.advertisementService.getExpertAdvertisements().subscribe(advertisements => this.advertisements = advertisements);
            }

        });


    }
}
