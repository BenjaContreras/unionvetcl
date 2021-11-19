import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'visitor-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.sass']
})
export class BrandsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
