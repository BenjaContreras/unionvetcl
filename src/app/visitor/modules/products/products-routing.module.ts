import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsScreenComponent } from './screens/products-screen/products-screen.component';

const routes: Routes = [
  { path: '', component: ProductsScreenComponent, pathMatch: 'full' },
  { path: '**', component: ProductsScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
