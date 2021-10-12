import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesRoutingModule } from './services-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ServicesDetailComponent } from './components/services-detail/services-detail.component';
import { ServiceScreenComponent } from './screens/service-screen/service-screen.component';

const components: any = [
  ServiceScreenComponent, ServicesListComponent,
  ServicesDetailComponent
]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    SwiperModule,
    SharedModule,
    NgbModule
  ],
})
export class ServicesModule { }
