import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProductRoutingModule } from './create-product-routing.module';
import { CreateScreenComponent } from './screens/create-screen/create-screen.component';
import { CreateComponentComponent } from './components/create-component/create-component.component';


@NgModule({
  declarations: [
    CreateScreenComponent,
    CreateComponentComponent
  ],
  imports: [
    CommonModule,
    CreateProductRoutingModule
  ]
})
export class CreateProductModule { }
