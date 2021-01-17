import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
    public score : number;
    
    constructor(private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {
        this.score = this.likes - this.dislikes;
    }

    onKill() {

    }

    goBack(): void {
        this.location.back();
    }
}
