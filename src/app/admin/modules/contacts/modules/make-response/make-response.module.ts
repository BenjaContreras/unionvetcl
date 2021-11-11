import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeResponseRoutingModule } from './make-response-routing.module';
import { ResponseScreenComponent } from './screens/response-screen/response-screen.component';
import { ResponseComponentComponent } from './components/response-component/response-component.component';
import { MaterialModule } from '@core/material.module';
import { ResponseHeaderComponent } from './components/response-header/response-header.component';
import { ResponseModalComponent } from './components/response-modal/response-modal.component';
import { RutModule } from '@core/pipes/rut/rut.module';


@NgModule({
  declarations: [
    ResponseScreenComponent,
    ResponseComponentComponent,
    ResponseHeaderComponent,
    ResponseModalComponent
  ],
  imports: [
    CommonModule,
    MakeResponseRoutingModule,
    MaterialModule,
    RutModule
  ]
})
export class MakeResponseModule { }
