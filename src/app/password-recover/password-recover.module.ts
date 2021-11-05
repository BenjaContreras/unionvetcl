import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRecoverRoutingModule } from './password-recover-routing.module';
import { RecoverScreenComponent } from './screens/recover-screen/recover-screen.component';
import { RecoverFormComponent } from './components/recover-form/recover-form.component';
import { MaterialModule } from '@core/material.module';
import { SharedModule } from '@shared/shared.module';
import { DataInputScreenComponent } from './screens/data-input/data-input.component';
import { ForgotFormComponent } from './components/forgot-form/forgot-form.component';


@NgModule({
  declarations: [
    RecoverScreenComponent,
    RecoverFormComponent,
    DataInputScreenComponent,
    ForgotFormComponent
  ],
  imports: [
    CommonModule,
    PasswordRecoverRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PasswordRecoverModule { }
