import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyUserRoutingModule } from './verify-user-routing.module';
import { VerifyScreenComponent } from './screens/verify-screen/verify-screen.component';
import { VerifyComponentComponent } from './components/verify-component/verify-component.component';


@NgModule({
  declarations: [
    VerifyScreenComponent,
    VerifyComponentComponent
  ],
  imports: [
    CommonModule,
    VerifyUserRoutingModule
  ]
})
export class VerifyUserModule { }
