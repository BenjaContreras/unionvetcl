import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';

const routes: Routes = [
  { path: '', component: ListScreenComponent, pathMatch: 'full' },
  { path: '**', component: ListScreenComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
