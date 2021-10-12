import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'admin-week-sells',
  templateUrl: './week-sells.component.html',
  styleUrls: ['./week-sells.component.sass']
})
export class WeekSellsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
