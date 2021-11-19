import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUserRoutingModule } from './create-user-routing.module';
import { CreateScreenComponent } from './screens/create-screen/create-screen.component';
import { CreateFormDetailComponent } from './components/create-user-form-detail/create-form-detail.component';
import { MaterialModule } from '@core/material.module';
import { CreateHeaderComponent } from './components/create-header/create-header.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { CreatePetFormDetailComponent } from './components/create-pet-form-detail/create-pet-form-detail.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


@NgModule({
  declarations: [
    CreateScreenComponent,
    CreateFormDetailComponent,
    CreatePetFormDetailComponent,
    CreateHeaderComponent,
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    CreateUserRoutingModule,
    MaterialModule,
    NgxMatSelectSearchModule
  ]
})
export class CreateUserModule { }
