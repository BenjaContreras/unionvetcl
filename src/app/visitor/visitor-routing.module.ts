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
        path: 'contactos',
        loadChildren: () => import('./modules/contactus/contactus.module')
          .then(cM => cM.ContactusModule)
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
