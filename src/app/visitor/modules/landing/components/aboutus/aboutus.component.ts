import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'visitor-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.sass']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  };
}
