import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyUserRoutingModule } from './verify-user-routing.module';
import { VerifyScreenComponent } from './screens/verify-screen/verify-screen.component';
import { VerifyComponentComponent } from './components/verify-component/verify-component.component';
import { MaterialModule } from '@core/material.module';
import { VerifyHeaderComponent } from './components/verify-header/verify-header.component';
import { VerifyModalComponent } from './components/verify-modal/verify-modal.component';


@NgModule({
  declarations: [
    VerifyScreenComponent,
    VerifyComponentComponent,
    VerifyHeaderComponent,
    VerifyModalComponent
  ],
  imports: [
    CommonModule,
    VerifyUserRoutingModule,
    MaterialModule
  ]
})
export class VerifyUserModule { }
