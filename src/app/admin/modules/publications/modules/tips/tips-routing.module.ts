import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectScreenComponent } from './screens/redirect-screen/redirect-screen.component';
import { TipScreenComponent } from './screens/tip-screen/tip-screen.component';

const routes: Routes = [
  { path: '', component: RedirectScreenComponent, pathMatch: 'full' },
  { path: 'crear-tip', component: TipScreenComponent},
  { path: 'actualizar-tip', component: TipScreenComponent},
  { path: 'lista-tips', component: TipScreenComponent},
  { path: '**', component: RedirectScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipsRoutingModule { }
