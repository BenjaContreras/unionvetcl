import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProductRoutingModule } from './create-product-routing.module';
import { CreateScreenComponent } from './screens/create-screen/create-screen.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { CreateFormDetailComponent } from './components/create-form-detail/create-form-detail.component';
import { CreateHeaderComponent } from './components/create-header/create-header.component';
import { MaterialModule } from '@core/material.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SaleModule } from '@core/pipes/sale/sale.module';


@NgModule({
  declarations: [
    CreateScreenComponent,
    CreateFormDetailComponent,
    CreateHeaderComponent,
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    CreateProductRoutingModule,
    MaterialModule,
    NgxMatSelectSearchModule,
    SaleModule
  ]
})
export class CreateProductModule { }
