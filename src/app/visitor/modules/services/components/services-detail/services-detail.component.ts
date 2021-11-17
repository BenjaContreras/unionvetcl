import SwiperCore, { Pagination, FreeMode } from 'swiper';
import { Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import { Service } from '@models/service.models';
SwiperCore.use([Pagination, FreeMode]);
@Component({
  selector: 'services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.sass']
})
export class ServicesDetailComponent implements OnInit, OnChanges {

  @Input() public service: Service | null;
  public paragraph: string[];

  public imgURL: any;
  public imgURL2: any;
  public imgURL3: any;
  public imgURL4: any;

  constructor() { 
    this.service = null;
    this.paragraph = [];
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.paragraph = [];
    this.service?.description.forEach(text => this.paragraph.push(text));
    this.imgURL = this.service?.imageOne;
    this.imgURL2 = this.service?.imageTwo;
    this.imgURL3 = this.service?.imageThree;
    this.imgURL4 = this.service?.imageFour;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}