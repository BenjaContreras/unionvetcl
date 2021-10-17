import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  public testLength: any[];
  constructor() { 
    this.testLength = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
