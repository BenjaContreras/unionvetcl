import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyScreenComponent } from './screens/verify-screen/verify-screen.component';

const routes: Routes = [
  { path: '', component: VerifyScreenComponent, pathMatch: 'full' },
  { path: '**', component: VerifyScreenComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyUserRoutingModule { }
