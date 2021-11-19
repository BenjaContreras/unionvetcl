import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutPipe } from './rut.pipe';



@NgModule({
  declarations: [RutPipe],
  imports: [
    CommonModule
  ],
  exports: [RutPipe]
})
export class RutModule { }
