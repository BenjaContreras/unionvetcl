import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrincipalScreenComponent } from './screens/principal-screen/principal-screen.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { WeekDatesComponent } from './components/week-dates/week-dates.component';
import { WeekSellsComponent } from './components/week-sells/week-sells.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { MaterialModule } from '@core/material.module';
import { ChartsModule } from 'ng2-charts';
const components: any = [
  PrincipalScreenComponent, ProductsListComponent,
  WeekDatesComponent, WeekSellsComponent,
  ListDetailComponent
];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ChartsModule
  ]
})
export class DashboardModule { }
