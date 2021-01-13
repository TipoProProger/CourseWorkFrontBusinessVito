import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { DroplistComponent } from '../droplist/droplist.component';
import { CustomInputFieldComponent } from "../custom-input-field/custom-input-field.component";

@NgModule({
  declarations: [DroplistComponent, CustomInputFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
      DroplistComponent,
      CustomInputFieldComponent
  ]
})
export class FormControlsModule { }
