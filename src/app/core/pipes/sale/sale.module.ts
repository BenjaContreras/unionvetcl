import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalePipe } from './sale.pipe';



@NgModule({
  declarations: [SalePipe],
  imports: [
    CommonModule
  ],
  exports: [SalePipe]
})
export class SaleModule { }
