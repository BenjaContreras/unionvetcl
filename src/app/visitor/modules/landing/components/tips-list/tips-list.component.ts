import { Component, HostListener, Input, OnInit, ViewChild, NgModule, OnChanges } from '@angular/core';
import SwiperCore, { Autoplay, Swiper } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Tip } from '@models/tip.model'
SwiperCore.use([Autoplay]);

@Component({
  selector: 'tips-list',
  templateUrl: './tips-list.component.html',
  styleUrls: ['./tips-list.component.sass']
})
export class TipsListComponent implements OnInit, OnChanges {

  public tipsAux: any[];
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
  @Input() tips! : Tip[];

  constructor() {
    this.tipsAux = [];
    models.forEach((tip: any) => this.tipsAux.push(tip));
    this.center = false;
    if (this.getScreenSize() >= 1230) this.center = true;
  }

  ngOnInit(): void {
    this.getScreenSize();
  }

  ngOnChanges() {
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

const models: any = [
  {
    img: '../../../../../../assets/visitor/png/Image.png',
    title: 'Parvovirosis',
    content: 'Si observa fecas con sangre o vomitos, acuda urgente a una clinica para una revisión de su mascota.'
  },
  {
    img: '../../../../../../assets/visitor/png/Image2.png',
    title: 'Calendario de vacuna',
    content: 'Recuerde que la aplicación de vacunas en sus mascotas debe ser anual, asi evitaremos contagio de enfermedades!'
  },
  {
    img: '../../../../../../assets/visitor/png/Image3.png',
    title: 'Temporada de calor',
    content: 'Recuerde mantener un recambio constante del agua de su mascota. Considerando un lugar fresco!'
  },
  {
    img: '../../../../../../assets/visitor/png/Image2.png',
    title: 'Área de recreo',
    content: 'Siempre estimular con juguetes y juegos, eso mantendrá una buena actividad mental y física en sus mascotas, facilitando una mejor salud.'
  },
  {
    img: '../../../../../../assets/visitor/png/Image.png',
    title: 'Descanso',
    content: 'Ellos igual necesitan tiempo para recargar energías. No interrumpas sus momentos de relajo, podrías estresarlos y generar conductas inapropiadas.'
  },
  {
    img: '../../../../../../assets/visitor/png/Image2.png',
    title: 'Alimentación',
    content: 'Comer dará salud, y una dieta completa y balanceada entrega mayores beneficios para su inmunidad y defensas. Los excesos son peligrosos.'
  },
  {
    img: '../../../../../../assets/visitor/png/Image3.png',
    title: 'Compañia',
    content: 'Más que una mascota, son familia. No los descuides, mantén al día sus controles y podrán acompañarte por muchos años.'
  },
]