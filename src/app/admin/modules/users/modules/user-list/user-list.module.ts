import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { MaterialModule } from '@core/material.module';
import { ModalComponent } from './components/modal/modal.component';
import { StreetModule } from '@core/pipes/street/street.module';
import { RutModule } from '@core/pipes/rut/rut.module';


@NgModule({
  declarations: [
    ListScreenComponent,
    ListComponentComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    MaterialModule,
    StreetModule,
    RutModule
  ]
})
export class UserListModule { }
