import { Component, OnInit } from '@angular/core';
import SwiperCore, { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
SwiperCore.use([Pagination, Navigation, Scrollbar, A11y, Autoplay, EffectFade]);

@Component({
  selector: 'app-service-screen',
  templateUrl: './service-screen.component.html',
  styleUrls: ['./service-screen.component.sass']
})
export class ServiceScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onSwiper(swiper: any) {
    console.log(swiper);
  };

  public onSlideChange(swiper: any) {
    console.log('slide changed');
  };
}
