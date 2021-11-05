import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-screen',
  templateUrl: './recover-screen.component.html',
  styleUrls: ['./recover-screen.component.sass']
})
export class RecoverScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
