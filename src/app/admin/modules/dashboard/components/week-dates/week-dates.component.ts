import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

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

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  };
}
