import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormaterPipe } from '../_helpers/date-formater.pipe';


@NgModule({
  declarations: [DateFormaterPipe],
  imports: [
    CommonModule
  ],
  exports: [
    DateFormaterPipe
  ]
})
export class SharedModule { }
