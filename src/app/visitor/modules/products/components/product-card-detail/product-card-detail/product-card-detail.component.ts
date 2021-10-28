import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.sass']
})
export class ProductCardDetailComponent implements OnInit {

  @Input() product: {brand: string, name: string, description: string, category: string};
  constructor() { 
    this.product = {
      brand: '',
      name: '',
      description: '',
      category: ''
    };
  }

  ngOnInit(): void {
  }

}
