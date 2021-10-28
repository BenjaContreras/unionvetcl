import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/user-list/user-list.module').then(luM => luM.UserListModule), pathMatch: 'full' },
  { path: 'crear-usuario', loadChildren: () => import('./modules/create-user/create-user.module').then(cuM => cuM.CreateUserModule)},
  { path: 'verificar-usuario', loadChildren: () => import('./modules/verify-user/verify-user.module').then(vuM => vuM.VerifyUserModule)},
  { path: 'lista-usuarios', loadChildren: () => import('./modules/user-list/user-list.module').then(luM => luM.UserListModule)},
  { path: '**', loadChildren: () => import('./modules/user-list/user-list.module').then(luM => luM.UserListModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
