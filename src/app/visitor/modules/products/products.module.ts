import { ProductsRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsScreenComponent } from './screens/products-screen/products-screen.component';
import { SharedModule } from '@shared/shared.module';

const components: any = [
  ProductsScreenComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
