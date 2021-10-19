import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-bottom-calendar',
  templateUrl: './bottom-calendar.component.html',
  styleUrls: ['./bottom-calendar.component.sass']
})
export class BottomCalendarComponent implements OnInit {

  public horasTarde: any[];

  constructor() {
    this.horasTarde = [
      {
        hora: { inicio: new Date("2021-10-13T15:00:00"), fin: new Date("2021-10-13T15:30:00") },
        pL: {fullName: 'Benjamin Contreras', state: 1},
        pMa: {fullName: 'Hector Veas', state: 2},
        pMi: {fullName: '-', state: 0},
        pJ: {fullName: 'Carolina', state: 3},
        pV: {fullName: 'Huaso isla', state: 0}
      },
      {
        hora: { inicio: new Date("2021-10-13T15:30:00"), fin: new Date("2021-10-13T16:00:00") },
        pL: { fullName: '-', state: 0 },
        pMa: { fullName: 'Pedro Aguilera', state: 3},
        pMi: { fullName: 'Manuel Santelices', state: 1},
        pJ: { fullName: 'Byron Guerrero', state: 2},
        pV: { fullName: 'Renata Prado', state: 3}
      },
      {
        hora: { inicio: new Date("2021-10-13T16:00:00"), fin: new Date("2021-10-13T16:30:00") },
        pL: { fullName: 'Felipe Concha', state: 3 },
        pMa: { fullName: 'Benjamin Castillo', state: 0},
        pMi: { fullName: 'Cristian Reyes', state: 1},
        pJ: { fullName: 'David Godoy', state: 3},
        pV: { fullName: 'Valentina Marut', state: 3}
      },
      {
        hora: { inicio: new Date("2021-10-13T16:30:00"), fin: new Date("2021-10-13T17:00:00") },
        pL: { fullName: 'Hector Veas', state: 1 },
        pMa: { fullName: 'Pedro Aguilera', state: 1},
        pMi: { fullName: 'Manuel Santelices', state: 0},
        pJ: { fullName: 'Byron Guerrero', state: 2},
        pV: { fullName: 'Renata Prado', state: 0}
      },
      {
        hora: { inicio: new Date("2021-10-13T17:00:00"), fin: new Date("2021-10-13T17:30:00") },
        pL: { fullName: 'Felipe Gutierrez', state: 2 },
        pMa: { fullName: 'Benjamin Castillo', state: 3},
        pMi: { fullName: 'Cristian Reyes', state: 0},
        pJ: { fullName: 'David Godoy', state: 2},
        pV: { fullName: 'Valentina Marut', state: 1}
      },
      {
        hora: { inicio: new Date("2021-10-13T17:30:00"), fin: new Date("2021-10-13T18:00:00") },
        pL: { fullName: 'Hector Veas', state: 3 },
        pMa: { fullName: 'Pedro Aguilera', state: 1},
        pMi: { fullName: 'Manuel Santelices', state: 2},
        pJ: { fullName: 'Byron Guerrero', state: 0},
        pV: { fullName: 'Renata Prado', state: 3}
      },
      {
        hora: { inicio: new Date("2021-10-13T18:00:00"), fin: new Date("2021-10-13T18:30:00") },
        pL: { fullName: '-', state: 0 },
        pMa: { fullName: 'Benjamin Castillo', state: 2},
        pMi: { fullName: 'Cristian Reyes', state: 0},
        pJ: { fullName: 'David Godoy', state: 1},
        pV: { fullName: 'Valentina Marut', state: 2}
      },
      {
        hora: { inicio: new Date("2021-10-13T18:30:00"), fin: new Date("2021-10-13T19:00:00") },
        pL: { fullName: '-', state: 0},
        pMa: { fullName: 'Benjamin Castillo', state: 3},
        pMi: { fullName: 'Cristian Reyes', state: 2},
        pJ: { fullName: 'David Godoy', state: 0},
        pV: { fullName: 'Valentina Marut', state: 1}
      },
    ];
  }

  ngOnInit(): void {
  }

}
