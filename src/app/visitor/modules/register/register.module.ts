import { RegisterRoutingModule } from './register-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterScreenComponent } from './screens/register-screen/register-screen.component';
import { SharedModule } from '@shared/shared.module';

const components: any = [
  RegisterScreenComponent
]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
