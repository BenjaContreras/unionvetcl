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
        pL: 'Benjamin Contreras',
        pMa: 'Hector Veas',
        pMi: 'Manuel Urra',
        pJ: 'Carolina',
        pV: 'Huaso isla'
      },
      { hora: { inicio: new Date("2021-10-13T15:30:00"), fin:  new Date("2021-10-13T16:00:00")}, pL: 'Hector Veas', pMa: 'Pedro Aguilera', pMi: 'Manuel Santelices', pJ: 'Byron Guerrero', pV: 'Renata Prado'},
      { hora: { inicio: new Date("2021-10-13T16:00:00"), fin:  new Date("2021-10-13T16:30:00")}, pL: 'Felipe Concha', pMa: 'Benjamin Castillo', pMi: 'Cristian Reyes', pJ: 'David Godoy', pV: 'Valentina Marut'},
      { hora: { inicio: new Date("2021-10-13T16:30:00"), fin:  new Date("2021-10-13T17:00:00")}, pL: 'Hector Veas', pMa: 'Pedro Aguilera', pMi: 'Manuel Santelices', pJ: 'Byron Guerrero', pV: 'Renata Prado'},
      { hora: { inicio: new Date("2021-10-13T17:00:00"), fin:  new Date("2021-10-13T17:30:00")}, pL: 'Felipe Concha', pMa: 'Benjamin Castillo', pMi: 'Cristian Reyes', pJ: 'David Godoy', pV: 'Valentina Marut'},
      { hora: { inicio: new Date("2021-10-13T17:30:00"), fin:  new Date("2021-10-13T18:00:00")}, pL: 'Hector Veas', pMa: 'Pedro Aguilera', pMi: 'Manuel Santelices', pJ: 'Byron Guerrero', pV: 'Renata Prado'},
      { hora: { inicio: new Date("2021-10-13T18:00:00"), fin: new Date("2021-10-13T18:30:00") }, pL: 'Felipe Concha', pMa: 'Benjamin Castillo', pMi: 'Cristian Reyes', pJ: 'David Godoy', pV: 'Valentina Marut' },
      { hora: { inicio: new Date("2021-10-13T18:30:00"), fin: new Date("2021-10-13T19:00:00") }, pL: 'Felipe Concha', pMa: 'Benjamin Castillo', pMi: 'Cristian Reyes', pJ: 'David Godoy', pV: 'Valentina Marut' },
    ];
  }

  ngOnInit(): void {
  }

}
