import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AdvertisementService } from "../../services/advertisement.service";

@Component({
    selector: 'user-advertisement-panel',
    templateUrl: './user-advertisement-panel.component.html',
    styleUrls: ['./user-advertisement-panel.component.css']
})
export class UserAdvertisementPanelComponent implements OnInit {

    @Input() id: number;
    @Input() shortName: string;
    @Input() userName: string;
    @Input() price: number;
    @Input() inn: string;
    @Input() okopfName: string;
    @Input() date: Date;
    @Input() likes: number;
    @Input() dislikes: number;
    @Input() disabledStateName: string;

    public score : number;
    public disabledState : boolean;
    
    constructor(private route: ActivatedRoute,
        private location: Location,
        private advertisementService: AdvertisementService) { }

    ngOnInit(): void {
        this.score = this.likes - this.dislikes;
        this.disabledState = this.disabledStateName.includes("на модерации") 
            || this.disabledStateName.includes("на проверке эксперта"); 
    }

    onKill() {
        this.advertisementService.finishAdvertisement(this.id);      
    }

    goBack(): void {
        this.location.back();
    }
}
