import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatesRoutingModule } from './dates-routing.module';
import { DateScreenComponent } from './screens/date-screen/date-screen.component';
import { TopCalendarComponent } from './components/top-calendar/top-calendar.component';
import { BottomCalendarComponent } from './components/bottom-calendar/bottom-calendar.component';
import { MaterialModule } from '@core/material.module';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { InformationModalComponent } from './components/information-modal/information-modal.component';
import { StatePipe } from '@core/pipes/state.pipe';

const components: any = [
  DateScreenComponent, TopCalendarComponent,
  BottomCalendarComponent, PatientDetailComponent, 
  InformationModalComponent, StatePipe
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    DatesRoutingModule,
    MaterialModule,
  ]
})
export class DatesModule { }
