import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { MaterialModule } from '@core/material.module';
import { ModalComponent } from './components/modal/modal.component';
import { SaleModule } from '@core/pipes/sale/sale.module';
import { StockModule } from '@core/pipes/stock/stock.module';



@NgModule({
  declarations: [
    ListScreenComponent,
    ListComponentComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MaterialModule,
    SaleModule,
    StockModule
  ]
})
export class ProductListModule { }
