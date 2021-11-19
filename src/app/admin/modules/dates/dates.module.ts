import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatesRoutingModule } from './dates-routing.module';
import { DateScreenComponent } from './screens/date-screen/date-screen.component';
import { TopCalendarComponent } from './components/top-calendar/top-calendar.component';
import { BottomCalendarComponent } from './components/bottom-calendar/bottom-calendar.component';
import { MaterialModule } from '@core/material.module';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { InformationModalComponent } from './components/information-modal/information-modal.component';
import { DateBookModalComponent } from './components/date-book-modal/date-book-modal.component';
import { StateModule } from '@core/pipes/state/state.module';
import { BlockModule } from '@core/pipes/block/block.module';
import { DayModule } from '@core/pipes/day/day.module';

const components: any = [
  DateScreenComponent, TopCalendarComponent,
  BottomCalendarComponent, PatientDetailComponent, 
  InformationModalComponent, DateBookModalComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    DatesRoutingModule,
    MaterialModule,
    StateModule,
    BlockModule,
    DayModule,
  ]
})
export class DatesModule { }
