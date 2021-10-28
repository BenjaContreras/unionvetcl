import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/product-list/product-list.module').then(plM => plM.ProductListModule), pathMatch: 'full'},
  { path: 'actualizar-productos', loadChildren: () => import('./modules/updates-products/updates-products.module').then(upM => upM.UpdatesProductsModule) },
  { path: 'crear-producto', loadChildren: () => import('./modules/create-product/create-product.module').then(cpM => cpM.CreateProductModule) },
  { path: 'lista-productos', loadChildren: () => import('./modules/product-list/product-list.module').then(plM => plM.ProductListModule) },
  { path: '**', loadChildren: () => import('./modules/product-list/product-list.module').then(plM => plM.ProductListModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
