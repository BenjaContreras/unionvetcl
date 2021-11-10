import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { MaterialModule } from '@core/material.module';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    ListScreenComponent,
    ListComponentComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    MaterialModule
  ]
})
export class UserListModule { }
