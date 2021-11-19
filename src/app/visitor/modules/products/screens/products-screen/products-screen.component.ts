
import { PaginateResponse, ProductProviderService } from '@core/providers/products/product-provider.service';
import { Product } from '@models/product.models';
import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-products-screen',
  templateUrl: './products-screen.component.html',
  styleUrls: ['./products-screen.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsScreenComponent implements OnInit {

  public length: number;
  public lengthOfCategories: string[];
  public lengthOfBrands: string[];
  public products: Product[];
  public productsSlice: Product[];
  public categories: string[];
  public brands: string[];
  public eventBrands: any;
  public eventCategories: any;
  public showAlertCategories: boolean;
  public showAlertBrands: boolean;
  public totalPages: number[];
  public pageSelected: number;

  constructor(
    private productProviderService: ProductProviderService
  ) {
    this.length = 0;
    this.lengthOfCategories = [];
    this.lengthOfBrands = [];
    this.products = [];
    this.productsSlice = [];
    this.categories = [];
    this.brands = [];
    this.showAlertCategories = false;
    this.showAlertBrands = false;
    this.totalPages = [];
    this.pageSelected = 1;
  }

  async ngOnInit() {
    const result: PaginateResponse | null = await this.getAllPublications();
    if (result) {
      this.products = result.products;
      for (let i = 0; i< result.totalPages; i++) this.totalPages.push(i+1);
      this.productsSlice = this.products;
      this.setCategories();
      this.setBrands();
    };
  }

  public async getAllPublications(): Promise<PaginateResponse | null> {
    try {
      const paginateResponse: PaginateResponse = await this.productProviderService.getAllProductsPaginated(13, 1).toPromise();
      if (paginateResponse && paginateResponse.products) {
        return paginateResponse;
      } else return null;
    } catch (error) {
      return null;
    }
  };

  public setCategories() {
    this.categories = [];
    this.products.forEach((product: Product) => {
      if (this.categories.indexOf(product.category) === -1)
        this.categories.push(product.category);
    });
    this.categories = this.categories.filter(category => category !== 'Categoria de prueba');
    this.categories.sort((a, b) => a.localeCompare(b));
    this.lengthOfCategoriesReciver(this.categories);
  };

  public setBrands() {
    this.brands = [];
    this.products.forEach((product: Product) => {
      if (this.brands.indexOf(product.brand) === -1)
        this.brands.push(product.brand);
    });
    this.brands = this.brands.filter(category => category !== 'prueba 1');
    this.brands.sort((a, b) => a.localeCompare(b));
    this.lengthOfBrandsReciver(this.brands);
  };

  public lengthReciver(event: number) {
    this.length = event;
  };

  public lengthOfCategoriesReciver(event: string[]) {
    this.lengthOfCategories = event;
  };

  public lengthOfBrandsReciver(event: string[]) {
    this.lengthOfBrands = event;
  };

  public cleanReciver(event: string){
    this.products = this.productsSlice;
    this.showAlertBrands = false;
    this.showAlertCategories = false;
    this.eventCategories = null;
    this.eventBrands = null;
  };

  public brandsReciver(event: string) {
    this.showAlertBrands = false;
    this.eventBrands = event;
    if (this.eventCategories) {
      this.products = this.products.filter(product => event.includes(product.brand));
    } else {
      this.products = this.productsSlice;
      this.products = this.products.filter(product => event.includes(product.brand));
    };
    if (this.products.length === 0){
      this.products = this.productsSlice;
      this.showAlertBrands = true;
      this.eventCategories = null;
      this.eventBrands = null;
    };
  };

  public categoriesReciver(event: string) {
    this.showAlertCategories = false;
    this.eventCategories = event;
    if (this.eventBrands) {
      this.products = this.products.filter(product => event.includes(product.category));
    } else { 
      this.products = this.productsSlice;
      this.products = this.products.filter(product => event.includes(product.category));
    };
    if (this.products.length === 0){
      this.products = this.productsSlice;
      this.showAlertBrands = true;
      this.eventCategories = null;
      this.eventBrands = null;
    };
  };

  public async goToPage(pageNumber: number){
    this.pageSelected = pageNumber;
    this.products = (await this.productProviderService.getAllProductsPaginated(13, pageNumber - 1).toPromise()).products;
    this.productsSlice = this.products;
    this.setCategories();
    this.setBrands();
    window.scrollTo(0, 0);
  };

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
