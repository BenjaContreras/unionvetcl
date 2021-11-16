import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { HelperService } from '@core/services/helper/helper.service';
import { Product } from '@models/product.models';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  public testLength: Product[];
  @Output() lengthOfProducts: EventEmitter<number>;
  @Output() lengthOfCategories: EventEmitter<{name: string, length: number}[]>;
  @Output() lengthOfBrands: EventEmitter<{name: string, length: number}[]>;
  private categories: {name: string, length: number}[];
  private brands: {name: string, length: number}[];
  public isLoading: boolean;

  constructor(private helperService: HelperService) { 
    this.categories = [];
    this.isLoading = true;
    this.brands = [];
    this.testLength = this.helperService.products;
    if (this.testLength) this.isLoading = false;
    this.lengthOfProducts = new EventEmitter<number>();
    this.lengthOfCategories = new EventEmitter<{name: string, length: number}[]>();
    this.lengthOfBrands = new EventEmitter<{name: string, length: number}[]>();
  }

  async ngOnInit(): Promise<void> {
    if (this.testLength) this.isLoading = false;
    this.lengthOfProducts.emit(this.testLength.length);
    this.searchByCategory();
    this.searchByBrand();
  }

  private searchByCategory() {
    const categoriesArray: string[] = ['Antiparasitario', 'Medicamento', 'Suplemento', 'Shampoo']
    let categoriesAux: string[] = [];
    categoriesArray.forEach(category => {
      this.testLength.forEach(product => {
        if (product.category === category) {
          categoriesAux.push(category);
        };
      });
      this.categories.push({name: category, length: categoriesAux.length});
      categoriesAux = [];
    });
    this.lengthOfCategories.emit(this.categories);
  };

  private searchByBrand() {
    const categoriesArray: string[] = ['Dragpharma', 'Traper', 'Bayer', 'Frontline Labs', 'Microsules']
    let categoriesAux: string[] = [];
    categoriesArray.forEach(category => {
      this.testLength.forEach(product => {
        if (product.brand === category) {
          categoriesAux.push(category);
        };
      });
      this.brands.push({name: category, length: categoriesAux.length});
      categoriesAux = [];
    });
    this.lengthOfBrands.emit(this.brands);
  };

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}