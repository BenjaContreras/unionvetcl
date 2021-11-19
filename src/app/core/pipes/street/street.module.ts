import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreetPipe } from './street.pipe';



@NgModule({
  declarations: [
    StreetPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [StreetPipe]
})
export class StreetModule { }
