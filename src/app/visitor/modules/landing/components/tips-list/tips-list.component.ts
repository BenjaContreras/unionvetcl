import { Component, HostListener, Input, OnInit, ViewChild, NgModule, OnChanges, SimpleChanges } from '@angular/core';
import SwiperCore, { Autoplay, Swiper, Lazy } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Tip } from '@models/tip.models'
SwiperCore.use([Autoplay, Lazy]);

@Component({
  selector: 'tips-list',
  templateUrl: './tips-list.component.html',
  styleUrls: ['./tips-list.component.sass']
})
export class TipsListComponent implements OnInit, OnChanges {

  public center: boolean;
  public breakpoints: any = {
    1220: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    840: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
  }
  @Input() tips : Tip[];

  constructor() {
    this.tips = [];
    this.center = false;
    if (this.getScreenSize() >= 1230) this.center = true;
  }

  ngOnInit(): void {
    this.getScreenSize();
  }

  async ngOnChanges(changes: SimpleChanges) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    if (window.innerWidth >= 1230) this.center = true;
    else this.center = false;
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