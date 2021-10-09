import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'products-side-filters',
  templateUrl: './side-filters.component.html',
  styleUrls: ['./side-filters.component.sass']
})
export class SideFiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
