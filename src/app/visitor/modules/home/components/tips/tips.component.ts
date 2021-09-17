import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.sass']
})
export class TipsComponent implements OnInit {

  public tip1: any = models[0];
  public tip2: any = models[1];
  public tip3: any = models[2];

  constructor() {
  }

  ngOnInit(): void {
  }
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