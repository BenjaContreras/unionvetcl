import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './screens/landing/landing.component';
import { SharedModule } from '@shared/shared.module';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ServicesComponent } from './components/services/services.component';
import { MaterialModule } from '@core/material.module';

const components: any = [
  LandingComponent, CarrouselComponent,
  AboutusComponent, ServicesComponent
];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [...components]
})
export class HomeModule { }
