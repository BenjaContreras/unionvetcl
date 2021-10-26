import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from '@core/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingScreenComponent } from './screens/landing-screen/landing-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { TipsListComponent } from './components/tips-list/tips-list.component';
import { TipDetailComponent } from './components/tip-detail/tip-detail.component';
import { SharedModule } from '@shared/shared.module';
import { ImagesCarouselComponent } from './components/images-carousel/images-carousel.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const compoennts: any = [
  LandingScreenComponent, HeaderComponent,
  TipsListComponent,
  TipDetailComponent, TipDetailComponent, 
  ImagesCarouselComponent
];

@NgModule({
  declarations: [...compoennts, AboutusComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MaterialModule,
    SharedModule,
    SwiperModule
  ]
})
export class LandingModule { }
