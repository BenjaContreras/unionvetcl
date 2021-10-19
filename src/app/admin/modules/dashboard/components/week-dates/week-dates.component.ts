import { Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
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

  public rango: string;
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
    this.rango = this.setRango();
  }

  ngOnInit(): void {
  }

  public goTo(route: string) {
    this.router.navigate([`admin/${route}`]);
  };

  public setRango(): string {
    let start = moment().startOf('week').format('dddd DD');
    let end = moment().endOf('week').format('dddd DD');
    return `${start} - ${end}`;
  };

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  };
}
