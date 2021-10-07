import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module')
          .then(hM => hM.HomeModule)
      },
      {
        path: 'servicios',
        loadChildren: () => import('./modules/services/services.module')
          .then(sM => sM.ServicesModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('./modules/products/products.module')
          .then(pM => pM.ProductsModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./modules/contactus/contactus.module')
          .then(cM => cM.ContactusModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module')
          .then(lM => lM.LoginModule)
      },
    ],
  },
  {
    path: '**',
    loadChildren: () => import('./modules/home/home.module')
      .then(hM => hM.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
