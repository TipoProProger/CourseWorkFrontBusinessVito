import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroplistComponent } from '../droplist/droplist.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [DroplistComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
      DroplistComponent
  ]
})
export class FormControlsModule { }
