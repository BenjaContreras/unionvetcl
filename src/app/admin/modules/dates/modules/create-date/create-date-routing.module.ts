import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateScreenComponent } from './screens/create-screen/create-screen.component';

const routes: Routes = [
  { path: '', component: CreateScreenComponent, pathMatch: 'full' },
  { path: '**', component: CreateScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateDateRoutingModule { }
