import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-modal',
  templateUrl: './calendar-modal.component.html',
  styleUrls: ['./calendar-modal.component.sass']
})
export class CalendarModalComponent implements OnInit {

  public dates: {day: string, mnna: any, tarde: any}[];

  constructor() { 
    this.dates = [
      { day: 'Lunes',
        mnna: ['09:30 - 10:00', '11:00 - 11:30', '11:30 - 12:00', '12:30 - 13:00'],
        tarde: ['16:30 - 17:00', '17:30 - 18:00', '18:30 - 19:00'],
      },
      { day: 'Martes',
        mnna: ['09:30 - 10:00', '11:00 - 11:30', '11:30 - 12:00', '12:30 - 13:00'],
        tarde: ['16:30 - 17:00', '17:30 - 18:00', '18:30 - 19:00'],
      },
      { day: 'Miercoles',
        mnna: ['09:30 - 10:00', '11:00 - 11:30', '11:30 - 12:00', '12:30 - 13:00'],
        tarde: ['16:30 - 17:00', '17:30 - 18:00', '18:30 - 19:00'],
      },
      { day: 'Jueves',
        mnna: ['09:30 - 10:00', '11:00 - 11:30', '11:30 - 12:00', '12:30 - 13:00'],
        tarde: ['16:30 - 17:00', '17:30 - 18:00', '18:30 - 19:00'],
      },
      { day: 'Viernes',
        mnna: ['09:30 - 10:00', '11:00 - 11:30', '11:30 - 12:00', '12:30 - 13:00'],
        tarde: ['16:30 - 17:00', '17:30 - 18:00', '18:30 - 19:00'],
      },
    ];
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
