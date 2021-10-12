import { Component, OnInit } from '@angular/core';
import { ProductProviderService } from '@core/providers/products/product-provider.service';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-products-screen',
  templateUrl: './products-screen.component.html',
  styleUrls: ['./products-screen.component.sass']
})
export class ProductsScreenComponent implements OnInit {

  public products : Product[];

  constructor(
    private productProviderService: ProductProviderService
  ) {
    this.products = [];
  }

  async ngOnInit() {
    this.products = await this.getAllPublications();
    console.log(this.products);
  }

  public async getAllPublications(): Promise<Product[]> {
    try {
      const product: Product[] = await this.productProviderService
        .getAllProducts()
        .toPromise();
      if (product) {
        return product;
      } else return [];
    } catch (error) {
      return [];
    }
  }

}
