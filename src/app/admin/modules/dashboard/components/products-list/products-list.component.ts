import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
