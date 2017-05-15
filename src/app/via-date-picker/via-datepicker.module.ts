import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatePickerComponent } from './via-datepicker.component';

export { DatePickerOptions, DateModel } from './via-datepicker.component';

@NgModule({
  declarations: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DatePickerComponent,
    FormsModule
  ]
})
export class ViaDatePickerModule { }
