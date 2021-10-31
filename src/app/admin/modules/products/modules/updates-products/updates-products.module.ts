import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatesProductsRoutingModule } from './updates-products-routing.module';
import { UpdateScreenComponent } from './screens/update-screen/update-screen.component';
import { UpdateComponentComponent } from './components/update-component/update-component.component';


@NgModule({
  declarations: [
    UpdateScreenComponent,
    UpdateComponentComponent
  ],
  imports: [
    CommonModule,
    UpdatesProductsRoutingModule
  ]
})
export class UpdatesProductsModule { }
