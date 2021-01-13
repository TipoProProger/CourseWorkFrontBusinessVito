import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'input-field',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomInputFieldComponent),
            multi: true
        }
    ],
    templateUrl: './custom-input-field.component.html',
    styleUrls: ['./custom-input-field.component.css']
})
export class CustomInputFieldComponent implements OnInit, ControlValueAccessor {

    @Input() name: string;
    @Input() placeholder = 'Введите значение';
    @Input() required = false;
    @Input() type = 'text';
    @Input() label : string;

    private _value: any;

    constructor() {
    }

    onChange: any = () => {
    };
    onTouched: any = () => {
    };

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.onChange(val);
        this.onTouched();
    }

    ngOnInit() {
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
    }

    writeValue(obj: any): void {
        if (obj) {
            this.value = obj;
        }
    }

}
