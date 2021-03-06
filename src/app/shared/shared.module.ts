import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '@core/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollTopButtonComponent } from './components/scroll-top-button/scroll-top-button.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RecoverNavComponent } from './components/recover-nav/recover-nav.component';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { CalendarModalComponent } from './components/calendar-modal/calendar-modal.component';

const components: any = [
  NavbarComponent, FooterComponent,
  ScrollTopButtonComponent, LoginComponent, 
  LoginFormComponent, RecoverNavComponent, 
  AlertModalComponent, CalendarModalComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule,
    NgbModule,
    MaterialModule
  ],
  exports: [...components]
})
export class SharedModule { }
