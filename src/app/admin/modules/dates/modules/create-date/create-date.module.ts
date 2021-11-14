import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDateRoutingModule } from './create-date-routing.module';
import { CreateScreenComponent } from './screens/create-screen/create-screen.component';
import { CreateHeaderComponent } from './components/create-header/create-header.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { MaterialModule } from '@core/material.module';
import { CreateFormDetailComponent } from './components/create-form-detail/create-form-detail.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

const components: any = [
  CreateScreenComponent, CreateHeaderComponent,
  CreateFormComponent, CreateFormDetailComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    CreateDateRoutingModule,
    MaterialModule,
    NgxMatSelectSearchModule
  ]
})
export class CreateDateModule { }
