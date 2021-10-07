import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusRoutingModule } from './contactus-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ContactScreenComponent } from './screens/contact-screen/contact-screen.component';

const components: any = [
  ContactScreenComponent
]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    SharedModule
  ]
})
export class ContactusModule { }
