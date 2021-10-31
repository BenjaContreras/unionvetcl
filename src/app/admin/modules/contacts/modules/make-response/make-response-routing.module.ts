import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponseScreenComponent } from './screens/response-screen/response-screen.component';

const routes: Routes = [
  { path: '', component: ResponseScreenComponent, pathMatch: 'full' },
  { path: '**', component: ResponseScreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeResponseRoutingModule { }
