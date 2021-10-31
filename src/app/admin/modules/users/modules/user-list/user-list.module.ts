import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { ListComponentComponent } from './components/list-component/list-component.component';


@NgModule({
  declarations: [
    ListScreenComponent,
    ListComponentComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule
  ]
})
export class UserListModule { }
