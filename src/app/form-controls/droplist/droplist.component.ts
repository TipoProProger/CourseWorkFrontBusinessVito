import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ListElement } from "./classes/listElement";

@Component({
  selector: 'droplist',
  providers: [
      {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => DroplistComponent),
          multi: true
      }
  ],
  templateUrl: './droplist.component.html',
  styleUrls: ['./droplist.component.css']
})
export class DroplistComponent implements OnInit, ControlValueAccessor {

  @Input() name : string;
  @Input() placeholder = "Пока пусто";
  @Input() required = false;
  @Input() type = 'text';

  @Input() list : ListElement[];
  
  private _open : boolean = false;
  /*private*/ public _value : ListElement;

  constructor() { }

  ngOnInit(): void {
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn : any) : void {
    this.onChange = fn;
  }

  registerOnTouched(fn : any) : void {
      this.onTouched = fn;
  }

  setDisableState(isDisable : boolean) : void {
  }

  valueSelect(val : ListElement) {
    this.writeValue(val.value);
    this.onTouched();
    this._open = false;
  }

  toggleOpen() {
      console.log("toggleOpen")
      this._open = !this._open;
  }

  get isOpen() : boolean {
    return this._open;
  }

  writeValue(val : string) {
    const selected = this.list.find(elem => elem.value === val)
    if (selected) {
        this._value = selected;
        this.onChange(this._value.value);
    }
  }

}