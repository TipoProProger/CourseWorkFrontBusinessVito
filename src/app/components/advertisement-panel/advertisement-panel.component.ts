import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'advertisement-panel',
    templateUrl: './advertisement-panel.component.html',
    styleUrls: ['./advertisement-panel.component.css']
})
export class AdvertisementPanelComponent implements OnInit {

    @Input() id : number;
    @Input() shortName : string;
    @Input() userName : string;
    @Input() price : number;
    @Input() inn : string;
    @Input() okopfName : string;    
    @Input() date : Date;
    @Input() likes : number;
    @Input() dislikes : number;

    constructor() { }

    ngOnInit(): void {
    }
    
}
