import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/contacts-list/contacts-list.module').then(clM => clM.ContactsListModule), pathMatch: 'full' },
  { path: 'responder-consulta', loadChildren: () => import('./modules/make-response/make-response.module').then(mrM => mrM.MakeResponseModule)},
  { path: 'lista-consultas', loadChildren: () => import('./modules/contacts-list/contacts-list.module').then(clM => clM.ContactsListModule)},
  { path: '**', loadChildren: () => import('./modules/contacts-list/contacts-list.module').then(clM => clM.ContactsListModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
