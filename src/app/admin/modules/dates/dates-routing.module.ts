import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateScreenComponent } from './screens/date-screen/date-screen.component';

const routes: Routes = [
  { path: '', component: DateScreenComponent, pathMatch: 'full'},
  { 
    path: 'crear-cita', 
    loadChildren: () => import('./modules/create-date/create-date.module').then(cdM => cdM.CreateDateModule)
  },
  { 
    path: 'lista-citas', 
    loadChildren: () => import('./modules/list-dates/list-dates.module').then(ldM => ldM.ListDatesModule)
  },
  { path: '**', component: DateScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatesRoutingModule { }
