import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'custom-textarea',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomTextareaComponent),
            multi: true
        }
    ],
    templateUrl: './custom-textarea.component.html',
    styleUrls: ['./custom-textarea.component.css']
})
export class CustomTextareaComponent implements OnInit, ControlValueAccessor {

    @Input() name: string;
    @Input() placeholder = 'Введите значение';
    @Input() required = false;
    @Input() type = 'text';
    @Input() label: string;

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
