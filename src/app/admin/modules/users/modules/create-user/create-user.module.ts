import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUserRoutingModule } from './create-user-routing.module';
import { CreateScreenComponent } from './screens/create-screen/create-screen.component';
import { CreateComponentsComponent } from './components/create-components/create-components.component';


@NgModule({
  declarations: [
    CreateScreenComponent,
    CreateComponentsComponent
  ],
  imports: [
    CommonModule,
    CreateUserRoutingModule
  ]
})
export class CreateUserModule { }
