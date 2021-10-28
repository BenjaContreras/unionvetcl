import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'crear-usuario', redirectTo: 'users'},
  { path: 'verificar-usuario', redirectTo: 'users'},
  { path: 'lista-usuarios', redirectTo: 'users'},
  { path: '**', redirectTo: 'users'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
