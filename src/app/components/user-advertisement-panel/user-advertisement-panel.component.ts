import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

    @Output() onKillEvent: EventEmitter<number> = new EventEmitter<number>();

    public score : number;
    public disabledState : boolean;
    
    constructor(private location: Location) { }

    ngOnInit(): void {
        this.score = this.likes - this.dislikes;
        this.disabledState = this.disabledStateName.includes("на модерации") 
            || this.disabledStateName.includes("на проверке эксперта"); 
    }

    onKill() {
        this.sendToParent();
        //this.advertisementService.finishAdvertisement(this.id);      
    }

    public sendToParent(): void {
        this.onKillEvent.emit(this.id);
    }

    goBack(): void {
        this.location.back();
    }
}
