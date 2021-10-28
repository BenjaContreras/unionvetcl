import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'actualizar-productos', redirectTo: 'products'},
  { path: 'actualizar-precios', redirectTo: 'products'},
  { path: 'lista-productos', redirectTo: 'products'},
  { path: '**', redirectTo: 'products'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
