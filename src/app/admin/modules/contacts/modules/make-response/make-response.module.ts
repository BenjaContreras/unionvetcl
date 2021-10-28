import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeResponseRoutingModule } from './make-response-routing.module';
import { ResponseScreenComponent } from './screens/response-screen/response-screen.component';
import { ResponseComponentComponent } from './components/response-component/response-component.component';


@NgModule({
  declarations: [
    ResponseScreenComponent,
    ResponseComponentComponent
  ],
  imports: [
    CommonModule,
    MakeResponseRoutingModule
  ]
})
export class MakeResponseModule { }
