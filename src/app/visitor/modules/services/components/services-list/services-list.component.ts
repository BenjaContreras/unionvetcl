import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Swiper } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([]);

@Component({
  selector: 'services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.sass']
})
export class ServicesListComponent implements OnInit {

  public titles: string[] = [
    'Aplicación de microchip',
    'Controles preventivos',
    'Consultas veterinarias',
    'Cirugias',
    'Farmacia',
    'Destartraje'
  ];

  constructor() {}

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slidePrev() {
    this.swiper?.swiperRef.slidePrev(100);
  };
  slideNext() {
    this.swiper?.swiperRef.slideNext(100);
  };
}