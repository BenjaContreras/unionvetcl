import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HomeScreenComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
