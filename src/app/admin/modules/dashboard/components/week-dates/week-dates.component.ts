import { Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'moment/locale/es';
moment.locale('es', {
  months: [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ],
  monthsShort: [
    'En.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ag.o', 'Sept.', 'Oct.', 'Nov.', 'Dic.'
  ],
  weekdays: [
    'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'
  ],
  weekdaysShort: [
    'Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.'
  ]
});

@Component({
  selector: 'admin-week-dates',
  templateUrl: './week-dates.component.html',
  styleUrls: ['./week-dates.component.sass']
})
export class WeekDatesComponent implements OnInit {

  public chartData: ChartDataSets[];
  public chartLabels: Label[];
  public chartOptions: ChartOptions;
  public chartLegends: boolean;
  public chartType: ChartType;
  public chartColors: any;
  public fechaInicio: any;
  public fechaTermino: any;

  constructor(private router: Router) {
    this.chartData = [
      {
        data: [10, 4, 15, 13, 2],
        label: 'Atenciones semanales',
        backgroundColor: 'rgba(15, 116, 153, .8)',
        borderColor: ['rgba(15, 116, 153, .8)'],
        hoverBackgroundColor: 'rgba(108, 187, 168, 1)',
        hoverBorderColor: ['rgba(15, 116, 153, .8)']
      }
    ];
    this.chartLabels = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    this.chartOptions = {
      responsive: true,
      legend: { position: 'bottom', labels: { fontSize: 16, fontFamily: 'Montserrat, cursive'}},
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 2,
            min: 0
          }
      }]}
    };
    this.chartLegends = true;
    this.chartType = 'bar';
  }

  ngOnInit(): void {
  }

  public goTo(route: string) {
    this.router.navigate([`admin/${route}`]);
  };

  public setDate(day: Date) {
    let dia = day.getDay();
    let numero = day.getDate();
    let mes = day.getMonth();
    if (dia <= 5) {
      if (dia === 1) {
        this.fechaInicio = {
          dia: this.getDia(dia, numero),
          mes: this.getMes(mes),
          anio: new Date().getFullYear()
        };
        this.fechaTermino = {
          dia: this.getDia(dia + 4, numero + 4),
          mes: this.getMes(mes),
          anio: new Date().getFullYear()
        };
      }
      if (dia === 2) {
        this.fechaInicio = {
          dia: this.getDia(dia, numero),
          mes: this.getMes(mes),
          anio: new Date().getFullYear()
        };
        this.fechaTermino = {
          dia: this.getDia(dia + 3, numero + 3),
          mes: this.getMes(mes),
          anio: new Date().getFullYear()
        };
      }
      if (dia === 3) {
        this.fechaInicio = {
          dia: this.getDia(dia, numero),
          mes: this.getMes(mes),
          anio: new Date().getFullYear()
        };
        this.fechaTermino = {
          dia: this.getDia(dia + 2, numero + 2),
          mes: this.getMes(mes),
          anio: new Date().getFullYear()
        };
      }
      if (dia === 4) {
        this.fechaInicio = {
          dia: this.getDia(dia, numero),
          mes: this.getMes(mes),
          anio: new Date().getFullYear()
        };
        this.fechaTermino = {
          dia: this.getDia(dia + 1, numero + 1),
          mes: this.getMes(mes),
          anio: new Date().getFullYear()
        };
      }
      if (dia === 5) {
        this.fechaInicio = {
          dia: this.getDia(dia, numero),
          mes: this.getMes(mes),
          anio: new Date().getFullYear()
        };
        this.fechaTermino = {
          dia: this.getDia(dia, numero),
          mes: this.getMes(mes),
          anio: new Date().getFullYear()
        };
      }
    } else {
      if (day.getDay() === 6) {
        //
      }
      if (day.getDay() === 7) {
        //
      }
    };
  }

  public getDia(dia: number, numero: number): string | null {
    switch (dia) {
      case 1: return `Lunes ${numero}`;
      case 2: return `Martes ${numero}`;
      case 3: return `Miercoles ${numero}`;
      case 4: return `Jueves ${numero}`;
      case 5: return `Viernes ${numero}`;
    };
    return null;
  };

  public getMes(mes: number): string | null {
    switch (mes) {
      case 0: return 'Enero';
      case 1: return 'Febrero';
      case 2: return 'Marzo';
      case 3: return 'Abril';
      case 4: return 'Mayo';
      case 5: return 'Junio';
      case 6: return 'Julio';
      case 7: return 'Agosto';
      case 8: return 'Septiembre';
      case 9: return 'Octubre';
      case 10: return 'Noviembre';
      case 11: return 'Diciembre';
    };
    return null;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  };
}
