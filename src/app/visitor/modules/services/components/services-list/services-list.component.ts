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
  public breakpoints: any = {
    1775: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1420: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1070: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    725: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
  }
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