import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceScreenComponent } from './screens/service-screen/service-screen.component';

const routes: Routes = [
  { path: '', component: ServiceScreenComponent, pathMatch: 'full' },
  { path: '**', component: ServiceScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }