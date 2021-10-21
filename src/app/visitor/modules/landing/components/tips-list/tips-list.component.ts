import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay, Swiper } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Tip } from '@models/tip.model'
SwiperCore.use([Autoplay]);

@Component({
  selector: 'tips-list',
  templateUrl: './tips-list.component.html',
  styleUrls: ['./tips-list.component.sass']
})
export class TipsListComponent implements OnInit {

  public tip1: any = models[0];
  public tip2: any = models[1];
  public tip3: any = models[2];
  @Input() tips! : Tip[];

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.tips);
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

const models: any = [
  {
    img: '../../../../../../assets/visitor/animaldeprueba.svg',
    title: 'Tip #1',
    content: 'Cuida a tus mascotas, como te cuidas tu! Ellos también son seres de cariño y ellos... te aman mucho!'
  },
  {
    img: '../../../../../../assets/visitor/ubicacion.svg',
    title: 'Tip #2',
    content: '¡Ellos te adoran!'
  },
  {
    img: '../../../../../../assets/visitor/vitrina.svg',
    title: 'Tip #3',
    content: '¡Ellos te adoran 2!'
  },
]