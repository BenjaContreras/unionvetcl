import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateScreenComponent } from './screens/date-screen/date-screen.component';

const routes: Routes = [
  { path: '', component: DateScreenComponent, pathMatch: 'full'},
  { path: 'crear-cita', component: DateScreenComponent},
  { path: 'lista-citas', component: DateScreenComponent},
  { path: '**', component: DateScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatesRoutingModule { }
