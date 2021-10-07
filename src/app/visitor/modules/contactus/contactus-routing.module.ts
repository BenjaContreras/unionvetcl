import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactScreenComponent } from './screens/contact-screen/contact-screen.component';

const routes: Routes = [
  { path: '', component: ContactScreenComponent, pathMatch: 'full' },
  { path: '**', component: ContactScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactusRoutingModule { }
