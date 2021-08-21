import { HomeComponent } from './visitor/screens/home/home.component';
import { UserGuard } from './core/guards/user/user.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '@core/guards/admin/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'visitor/inicio',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'visitor',
    loadChildren: () => import('./visitor/visitor.module')
      .then(VisitorModule => VisitorModule.VisitorModule)
  },
  {
    path: 'user',
    canActivate: [UserGuard],
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module')
      .then(AdminModule => AdminModule.AdminModule)
  },
  {
    path: '**',
    redirectTo: 'visitor/inicio',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
