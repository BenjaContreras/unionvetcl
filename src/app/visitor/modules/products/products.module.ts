import { ProductsRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsScreenComponent } from './screens/products-screen/products-screen.component';
import { SharedModule } from '@shared/shared.module';
import { SideFiltersComponent } from './components/side-filters/side-filters/side-filters.component';
import { ProductCardComponent } from './components/product-card/product-card/product-card.component';
import { MaterialModule } from '@core/material.module';
import { ProductCardDetailComponent } from './components/product-card-detail/product-card-detail/product-card-detail.component';

const components: any = [
  ProductsScreenComponent, SideFiltersComponent,
  ProductCardComponent, ProductCardDetailComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ProductsModule { }
