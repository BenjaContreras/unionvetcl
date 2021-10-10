import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrincipalScreenComponent } from './screens/principal-screen/principal-screen.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { WeekDatesComponent } from './components/week-dates/week-dates.component';
import { WeekSellsComponent } from './components/week-sells/week-sells.component';

const components: any = [
  PrincipalScreenComponent, ProductsListComponent,
  WeekDatesComponent, WeekSellsComponent
];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
