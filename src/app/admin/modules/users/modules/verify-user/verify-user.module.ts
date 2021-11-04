import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyUserRoutingModule } from './verify-user-routing.module';
import { VerifyScreenComponent } from './screens/verify-screen/verify-screen.component';
import { VerifyComponentComponent } from './components/verify-component/verify-component.component';
import { MaterialModule } from '@core/material.module';


@NgModule({
  declarations: [
    VerifyScreenComponent,
    VerifyComponentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class VerifyUserModule { }
