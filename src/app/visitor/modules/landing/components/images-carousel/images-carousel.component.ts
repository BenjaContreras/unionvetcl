import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.sass']
})
export class ImagesCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
