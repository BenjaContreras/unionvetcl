import { UpdateScreenComponent } from './screens/update-screen/update-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UpdateScreenComponent, pathMatch: 'full' },
  { path: '**', component: UpdateScreenComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatesProductsRoutingModule { }
