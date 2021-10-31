import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDatesRoutingModule } from './list-dates-routing.module';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { MaterialModule } from '@core/material.module';

const components: any = [
  ListScreenComponent,
  ListComponentComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ListDatesRoutingModule,
    MaterialModule
  ]
})
export class ListDatesModule { }