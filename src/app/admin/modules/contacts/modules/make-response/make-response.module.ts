import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeResponseRoutingModule } from './make-response-routing.module';
import { ResponseScreenComponent } from './screens/response-screen/response-screen.component';
import { ResponseComponentComponent } from './components/response-component/response-component.component';
import { MaterialModule } from '@core/material.module';
import { ResponseHeaderComponent } from './components/response-header/response-header.component';
import { ResponseModalComponent } from './components/response-modal/response-modal.component';
import { MomentModule } from '@core/pipes/moment/moment.module';
import { RecentEditedModalComponent } from './components/recent-edited-modal/recent-edited-modal.component';


@NgModule({
  declarations: [
    ResponseScreenComponent,
    ResponseComponentComponent,
    ResponseHeaderComponent,
    ResponseModalComponent,
    RecentEditedModalComponent
  ],
  imports: [
    CommonModule,
    MakeResponseRoutingModule,
    MaterialModule,
    MomentModule
  ]
})
export class MakeResponseModule { }
