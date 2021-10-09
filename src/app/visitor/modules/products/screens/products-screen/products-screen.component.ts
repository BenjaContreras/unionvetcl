import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-screen',
  templateUrl: './products-screen.component.html',
  styleUrls: ['./products-screen.component.sass']
})
export class ProductsScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
