import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeResponseRoutingModule } from './make-response-routing.module';
import { ResponseScreenComponent } from './screens/response-screen/response-screen.component';
import { ResponseComponentComponent } from './components/response-component/response-component.component';
import { MaterialModule } from '@core/material.module';
import { ResponseHeaderComponent } from './components/response-header/response-header.component';
import { RutPipe } from '@core/pipes/rut.pipe';
import { ResponseModalComponent } from './components/response-modal/response-modal.component';


@NgModule({
  declarations: [
    ResponseScreenComponent,
    ResponseComponentComponent,
    ResponseHeaderComponent,
    RutPipe,
    ResponseModalComponent
  ],
  imports: [
    CommonModule,
    MakeResponseRoutingModule,
    MaterialModule,
  ]
})
export class MakeResponseModule { }
