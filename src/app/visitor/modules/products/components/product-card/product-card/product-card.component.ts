import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { HelperService } from '@core/services/helper/helper.service';
import { Product } from '@models/product.models';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit, OnChanges {

  @Input() products: Product[];
  public isLoading: boolean;

  constructor(private helperService: HelperService) {
    this.isLoading = true;
    this.products = [];
    if (this.products) this.isLoading = false;
  }

  async ngOnInit(): Promise<void> {
    if (this.products) this.isLoading = false;
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.products) {
      this.products = changes.products.currentValue;
      this.isLoading = false;
    };
  };

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}