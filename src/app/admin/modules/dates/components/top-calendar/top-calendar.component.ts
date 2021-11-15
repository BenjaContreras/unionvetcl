import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformationModalComponent } from '../information-modal/information-modal.component';

@Component({
  selector: 'admin-top-calendar',
  templateUrl: './top-calendar.component.html',
  styleUrls: ['./top-calendar.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class TopCalendarComponent implements OnInit {

  public horasManna: any[];
  public hora: Date;
  public dateSelected: {fullName: string, state: number, animal: string};
  @Output() selectedDateEmitter: EventEmitter<{fullName: string, state: number, animal: string}>;

  @Input() dateBottom: any; @Input() isAdmin!: boolean; @Input() month: string; @Input() weekInit: number;
  @Input() weekEnd: number; @Input() isAfter!: boolean;


  constructor(private dialog: MatDialog) { 
    this.hora = new Date();
    this.horasManna = [
      {
        hora: { inicio: new Date("2021-10-13T09:30:00"), fin: new Date("2021-10-13T10:00:00") },
        pL: {fullName: 'Benjamin Contreras', state: 1, animal: 'Chimi'},
        pMa: {fullName: 'Hector Veas', state: 2, animal: 'Bobby'},
        pMi: {fullName: '-', state: 0},
        pJ: {fullName: 'Carolina', state: 3, animal: 'Spacy'},
        pV: {fullName: '-', state: 0}
      },
      {
        hora: { inicio: new Date("2021-10-13T10:00:00"), fin: new Date("2021-10-13T10:30:00") },
        pL: { fullName: '-', state: 0},
        pMa: { fullName: 'Pedro Aguilera', state: 3, animal: 'Thor'},
        pMi: { fullName: 'Manuel Santelices', state: 1, animal: 'Chipirón'},
        pJ: { fullName: 'Byron Guerrero', state: 2, animal: 'Toby'},
        pV: { fullName: 'Renata Prado', state: 3, animal: 'Lola'}
      },
      {
        hora: { inicio: new Date("2021-10-13T10:30:00"), fin: new Date("2021-10-13T11:00:00") },
        pL: { fullName: 'Felipe Concha', state: 3, animal: 'Ciruela' },
        pMa: { fullName: '-', state: 0},
        pMi: { fullName: 'Cristian Reyes', state: 1, animal: 'Coco'},
        pJ: { fullName: 'David Godoy', state: 3, animal: 'Faraón'},
        pV: { fullName: 'Valentina Marut', state: 3, animal: 'Geisha'}
      },
      {
        hora: { inicio: new Date("2021-10-13T11:00:00"), fin: new Date("2021-10-13T11:30:00") },
        pL: { fullName: 'Hector Veas', state: 1, animal: 'Boo' },
        pMa: { fullName: 'Pedro Aguilera', state: 1, animal: 'Leo'},
        pMi: { fullName: '-', state: 0},
        pJ: { fullName: 'Byron Guerrero', state: 2, animal: 'Cheeto'},
        pV: { fullName: '-', state: 0}
      },
      {
        hora: { inicio: new Date("2021-10-13T11:30:00"), fin: new Date("2021-10-13T12:00:00") },
        pL: { fullName: 'Felipe Gutierrez', state: 2, animal: 'Bella' },
        pMa: { fullName: 'Benjamin Castillo', state: 3, animal: 'Kyle'},
        pMi: { fullName: '-', state: 0},
        pJ: { fullName: 'David Godoy', state: 2, animal: 'Sirena'},
        pV: { fullName: 'Valentina Marut', state: 1, animal: 'Penny'}
      },
      {
        hora: { inicio: new Date("2021-10-13T12:00:00"), fin: new Date("2021-10-13T12:30:00") },
        pL: { fullName: 'Hector Veas', state: 3, animal: 'Texanna' },
        pMa: { fullName: 'Pedro Aguilera', state: 1, animal: 'Lilyrose'},
        pMi: { fullName: 'Manuel Santelices', state: 2, animal: 'Colmillo'},
        pJ: { fullName: '-', state: 0},
        pV: { fullName: 'Renata Prado', state: 3, animal: 'Dracko'}
      },
      {
        hora: { inicio: new Date("2021-10-13T12:30:00"), fin: new Date("2021-10-13T13:00:00") },
        pL: { fullName: '-', state: 0 },
        pMa: { fullName: 'Benjamin Castillo', state: 2, animal: 'Dandy'},
        pMi: { fullName: '-', state: 0},
        pJ: { fullName: 'David Godoy', state: 1, animal: 'Dalia'},
        pV: { fullName: 'Valentina Marut', state: 2, animal: 'taco'}
      },
    ];
    this.dateSelected = {fullName: '', state: 0, animal: ''};
    this.selectedDateEmitter = new EventEmitter();
    this.month = '';
    this.weekInit = 0;
    this.weekEnd = 0;
  };

  ngOnInit(): void {
  }

  public setSelectedDate(person: {fullName: string, state: number, animal: string}, dia: number, time: {inicio: Date, fin: Date}, patient: string): void {
    this.dateSelected = person;
    this.selectedDateEmitter.emit(this.dateSelected);
    if (this.dateSelected.state !== 0) {
      this.dialog.open(InformationModalComponent, {
        width: '700px',
        data: {
          date: this.dateSelected,
          patient: patient,
          day: dia,
          week: {init: this.weekInit, end: this.weekEnd},
          time: this.transformTime(time),
          month: this.month ? this.month : this.transformMonth(new Date().getMonth() + 1),
        }
      }).afterClosed().subscribe(() => {
          this.dateSelected = {fullName: '', state: 0, animal: ''};
          this.selectedDateEmitter.emit(this.dateSelected);
      });
    };
  };

  private transformMonth(month: number): string {
    switch (month) {
      case 1:
        return 'Enero';
      case 2:
        return 'Febrero';
      case 3:
        return 'Marzo';
      case 4:
        return 'Abril';
      case 5:
        return 'Mayo';
      case 6:
        return 'Junio';
      case 7:
        return 'Julio';
      case 8:
        return 'Agosto';
      case 9:
        return 'Septiembre';
      case 10:
        return 'Octubre';
      case 11:
        return 'Noviembre';
      case 12:
        return 'Diciembre';
      default:
        return '';
    }
  };

  private transformTime(time: {inicio: Date, fin: Date}): number {
    let hour: any = time.inicio.getHours();
    let minutes: any = time.inicio.getMinutes();
    let hourEnd: any = time.fin.getHours();
    let minutesEnd: any = time.fin.getMinutes();
    const timeIni = `${hour}:${minutes}`;
    const timeEnd = `${hourEnd}:${minutesEnd}`;
    return this.tranformToString(timeIni, timeEnd);
  }

  private tranformToString(timeIni: string, timeEnd: string): number {
    if (timeIni === '9:30' && timeEnd === '10:0') {
      return 1;
    } else if (timeIni === '10:0' && timeEnd === '10:30') {
      return 2;
    } else if (timeIni === '10:30' && timeEnd === '11:0') {
      return 3;
    } else if (timeIni === '11:0' && timeEnd === '11:30') {
      return 4;
    } else if (timeIni === '11:30' && timeEnd === '12:0') {
      return 5;
    } else if (timeIni === '12:0' && timeEnd === '12:30') {
      return 6;
    } else if (timeIni === '12:30' && timeEnd === '13:0') {
      return 7;
    } else if (timeIni === '15:0' && timeEnd === '15:30') {
      return 8;
    } else if (timeIni === '15:30' && timeEnd === '16:0') {
      return 9;
    } else if (timeIni === '16:0' && timeEnd === '16:30') {
      return 10;
    } else if (timeIni === '16:30' && timeEnd === '17:0') {
      return 11;
    } else if (timeIni === '17:0' && timeEnd === '17:30') {
      return 12;
    } else if (timeIni === '17:30' && timeEnd === '18:0') {
      return 13;
    } else if (timeIni === '18:0' && timeEnd === '18:30') {
      return 14;
    } else return 15;
  };
}
