import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './screens/landing/landing.component';
import { SharedModule } from '@shared/shared.module';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

const components: any = [
  LandingComponent
];
@NgModule({
  declarations: [...components, CarrouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [...components]
})
export class HomeModule { }
