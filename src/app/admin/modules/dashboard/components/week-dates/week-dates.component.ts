import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'admin-week-dates',
  templateUrl: './week-dates.component.html',
  styleUrls: ['./week-dates.component.sass']
})
export class WeekDatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
