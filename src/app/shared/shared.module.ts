import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '@core/material.module';

const components: any = [
  NavbarComponent, FooterComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [...components]
})
export class SharedModule { }
