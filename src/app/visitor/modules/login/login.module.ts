import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';

const components: any = [
  LoginScreenComponent
]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
