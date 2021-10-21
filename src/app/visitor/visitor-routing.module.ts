import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/landing/landing.module')
          .then(lM => lM.LandingModule)
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
      },
    ],
  },
  {
    path: '**',
    loadChildren: () => import('./modules/landing/landing.module')
      .then(lM => lM.LandingModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
