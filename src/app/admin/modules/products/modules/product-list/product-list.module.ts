import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { MaterialModule } from '@core/material.module';



@NgModule({
  declarations: [
    ListScreenComponent,
    ListComponentComponent,
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MaterialModule
  ]
})
export class ProductListModule { }
