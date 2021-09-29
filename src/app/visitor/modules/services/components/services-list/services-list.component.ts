import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import SwiperCore, { Swiper } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([]);

@Component({
  selector: 'services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.sass']
})
export class ServicesListComponent implements OnInit {

  @Output() public services: EventEmitter<string>;
  public titles: string[] = [
    'Aplicación de microchip',
    'Controles preventivos',
    'Consultas veterinarias',
    'Cirugias',
    'Farmacia',
    'Destartraje'
  ];

  constructor() {
    this.services = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  public onSwiper(nameOfService: string) {
    this.services.emit(nameOfService);
  };

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