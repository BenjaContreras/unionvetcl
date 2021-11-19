import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@models/product.models';

@Component({
  selector: 'product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.sass']
})
export class ProductCardDetailComponent implements OnInit {

  @Input() product: Product | null;
  constructor() { 
    this.product = null;
  }

  ngOnInit(): void {
  }

}
