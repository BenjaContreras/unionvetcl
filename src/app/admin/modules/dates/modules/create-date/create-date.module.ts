import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDateRoutingModule } from './create-date-routing.module';
import { CreateScreenComponent } from './screens/create-screen/create-screen.component';
import { CreateHeaderComponent } from './components/create-header/create-header.component';
import { CreateFormComponent } from './components/create-form/create-form.component';

const components: any = [
  CreateScreenComponent, CreateHeaderComponent,
  CreateFormComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    CreateDateRoutingModule
  ]
})
export class CreateDateModule { }
