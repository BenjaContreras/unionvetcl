import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusRoutingModule } from './contactus-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ContactScreenComponent } from './screens/contact-screen/contact-screen.component';
import { MaterialModule } from '@core/material.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const components: any = [
  ContactScreenComponent, ContactFormComponent
]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class ContactusModule { }
