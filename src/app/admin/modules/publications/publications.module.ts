import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { RedirectScreenComponent } from './screens/redirect-screen/redirect-screen.component';


@NgModule({
  declarations: [
    RedirectScreenComponent
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule
  ]
})
export class PublicationsModule { }
