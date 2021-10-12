
import { ProductProviderService } from '@core/providers/products/product-provider.service';
import { Product } from '@models/product.model';
import { Component, HostListener, OnInit } from '@angular/core';

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

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
