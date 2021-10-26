import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'landing-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public screen: string;
  constructor() { 
    this.screen = 'big';
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    if (window.innerWidth < 1410) {
      if (window.innerWidth <= 1378 && window.innerWidth >= 1164) {
        this.screen = 'small';
        return window.innerWidth;
      };
      this.screen = 'normal';
    } else {
      this.screen = 'big';
    };
    return window.innerWidth;
  };
}
