import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './screens/landing/landing.component';
import { SharedModule } from '@shared/shared.module';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MaterialModule } from '@core/material.module';
import { TipsComponent } from './components/tips/tips.component';
import { TipCardDetailComponent } from './components/tip-card-detail/tip-card-detail.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { PublicationCardDetailComponent } from './components/publication-card-detail/publication-card-detail.component';
import { SwiperModule } from 'swiper/angular';
import { BrandsComponent } from './components/brands/brands.component';

const components: any = [
  LandingComponent, CarrouselComponent,
  AboutusComponent, TipsComponent,
  TipCardDetailComponent, PublicationsComponent,
  PublicationCardDetailComponent, BrandsComponent
];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    SwiperModule,
    NgbModule
  ],
  exports: [...components]
})
export class HomeModule { }
