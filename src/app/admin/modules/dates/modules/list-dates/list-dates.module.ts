import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDatesRoutingModule } from './list-dates-routing.module';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { MaterialModule } from '@core/material.module';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from '@core/pipes/moment/moment.module';
import { RutModule } from '@core/pipes/rut/rut.module';
import { StateModule } from '@core/pipes/state/state.module';

const components: any = [
  ListScreenComponent,
  ListComponentComponent, 
  ModalComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ListDatesRoutingModule,
    MaterialModule,
    NgbModule,
    MomentModule,
    RutModule,
    StateModule
  ]
})
export class ListDatesModule { }