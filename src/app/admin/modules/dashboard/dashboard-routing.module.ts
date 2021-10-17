import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalScreenComponent } from './screens/principal-screen/principal-screen.component';

const routes: Routes = [
  { path: '', component: PrincipalScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
