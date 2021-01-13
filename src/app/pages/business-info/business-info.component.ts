import { Component, OnInit, ViewChild } from '@angular/core';

import { Business } from "../../classes/Business";

import { BusinessService } from "../../services//business.service";

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.css']
})
export class BusinessInfoComponent implements OnInit {

  @ViewChild('f', {static: true}) form;

  public business : Business;

  public fuckingShortName : string;
  constructor( private businessService : BusinessService ) {}

  ngOnInit(): void {
      this.getBusiness(0);///FIXME
  }

  getBusiness(id : number) : void {
    this.businessService.getBusiness(id).subscribe(business => this.business = business);
  }

}
