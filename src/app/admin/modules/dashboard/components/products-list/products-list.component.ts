import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  public today: Date;

  constructor() { 
    this.today = new Date();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
