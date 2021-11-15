import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayPipe } from './day.pipe';



@NgModule({
  declarations: [
    DayPipe
  ],
  imports: [
    CommonModule
  ], 
  exports: [DayPipe]
})
export class DayModule { }
