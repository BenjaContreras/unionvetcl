import { ServicesRoutingModule } from './services-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceScreenComponent } from './screens/service-screen/service-screen.component';
import { SharedModule } from '@shared/shared.module';
import { SwiperModule } from 'swiper/angular';

const components: any = [
  ServiceScreenComponent,
]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    SwiperModule,
    SharedModule
  ],
})
export class ServicesModule { }
