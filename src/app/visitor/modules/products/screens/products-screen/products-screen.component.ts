
import { ProductProviderService } from '@core/providers/products/product-provider.service';
import { Product } from '@models/product.model';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-screen',
  templateUrl: './products-screen.component.html',
  styleUrls: ['./products-screen.component.sass']
})
export class ProductsScreenComponent implements OnInit {

  public length: number;
  public lengthOfCategories: {name: string, length: number}[];
  public lengthOfBrands: {name: string, length: number}[];
  public products : Product[];

  constructor(
    private productProviderService: ProductProviderService
  ) {
    this.length = 0;
    this.lengthOfCategories = [{name: '', length: 0}];
    this.lengthOfBrands = [{name: '', length: 0}];
    this.products = [];
  }

  async ngOnInit() {
    this.products = await this.getAllPublications();
  }

  public async getAllPublications(): Promise<Product[]> {
    try {
      const product: Product[] = await this.productProviderService.getAllProducts().toPromise();
      if (product) {
        return product;
      } else return [];
    } catch (error) {
      return [];
    }
  }

  public changeValue(event: any){
    //
  };

  public lengthReciver(event: number) {
    this.length = event;
  };

  public lengthOfCategoriesReciver(event: {name: string, length: number}[]) {
    this.lengthOfCategories = event;
  };

  public lengthOfBrandsReciver(event: {name: string, length: number}[]) {
    this.lengthOfBrands = event;
  };

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
