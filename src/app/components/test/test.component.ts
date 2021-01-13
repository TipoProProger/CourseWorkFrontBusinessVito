import { Component, OnInit, ViewChild } from '@angular/core';

import { ListElement } from "../../form-controls/droplist/classes/listElement";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @ViewChild('f', {static: true}) form;

  public data: ListElement[] = [
      {id:1, value:"fuck1"},
      {id:2, value:"fuck2"},
      {id:3, value:"fuckToYou"},
  ];
  public choosen: ListElement;

  constructor() { }

  ngOnInit(): void {
  }

}
