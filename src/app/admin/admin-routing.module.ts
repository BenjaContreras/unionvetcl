import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module')
          .then(dM => dM.DashboardModule)
      },
      {
        path: 'agenda',
        loadChildren: () => import('./modules/dates/dates.module')
          .then(dM => dM.DatesModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./modules/users/users.module')
          .then(uM => uM.UsersModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('./modules/products/products.module')
          .then(pM => pM.ProductsModule)
      },
      {
        path: 'consultas',
        loadChildren: () => import('./modules/contacts/contacts.module')
          .then(cM => cM.ContactsModule)
      },
      {
        path: 'publicaciones',
        loadChildren: () => import('./modules/publications/publications.module')
          .then(pM => pM.PublicationsModule)
      },
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./modules/dashboard/dashboard.module')
      .then(dM => dM.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
