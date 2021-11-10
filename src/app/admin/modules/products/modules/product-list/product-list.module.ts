import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { MaterialModule } from '@core/material.module';
import { SalePipe } from '@core/pipes/sale.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { StockPipe } from '@core/pipes/stock.pipe';



@NgModule({
  declarations: [
    ListScreenComponent,
    ListComponentComponent,
    SalePipe,
    ModalComponent,
    StockPipe
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MaterialModule
  ]
})
export class ProductListModule { }
