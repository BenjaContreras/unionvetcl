import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyUserRoutingModule } from './verify-user-routing.module';
import { VerifyScreenComponent } from './screens/verify-screen/verify-screen.component';
import { VerifyComponentComponent } from './components/verify-component/verify-component.component';
import { MaterialModule } from '@core/material.module';
import { VerifyHeaderComponent } from './components/verify-header/verify-header.component';
import { VerifyModalComponent } from './components/verify-modal/verify-modal.component';
import { RecentVerifiedModalComponent } from './components/recent-verified-modal/recent-verified-modal.component';
import { MomentModule } from '@core/pipes/moment/moment.module';
import { StreetModule } from '@core/pipes/street/street.module';
import { RutModule } from '@core/pipes/rut/rut.module';


@NgModule({
  declarations: [
    VerifyScreenComponent,
    VerifyComponentComponent,
    VerifyHeaderComponent,
    VerifyModalComponent,
    RecentVerifiedModalComponent
  ],
  imports: [
    CommonModule,
    VerifyUserRoutingModule,
    MaterialModule,
    MomentModule,
    StreetModule,
    RutModule
  ]
})
export class VerifyUserModule { }
