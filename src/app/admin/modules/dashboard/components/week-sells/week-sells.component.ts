import { Component, HostListener, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'admin-week-sells',
  templateUrl: './week-sells.component.html',
  styleUrls: ['./week-sells.component.sass']
})
export class WeekSellsComponent implements OnInit {
  
  public chartData: number[];
  public chartLabels: Label[];
  public chartOptions: ChartOptions;
  public chartLegends: boolean;
  public chartType: ChartType;
  public chartColors: any;

  constructor() { 
    this.chartData = [40, 50, 10];
    this.chartLabels = ['Farmacos', 'Vacunas', 'Alimento'];
    this.chartOptions = {
      responsive: true,
      legend: { position: 'left', labels: { fontSize: 16, fontFamily: 'Montserrat, cursive'}},
    };
    this.chartLegends = true;
    this.chartType = 'pie';
    this.chartColors = [
      { backgroundColor: ['rgba(15, 116, 153, 1)', 'rgba(108, 179, 187, 1)', 'rgba(108, 187, 168, 1)'] }
    ];
  }

  ngOnInit(): void {
  }

  public deleteLastOne() {
    this.chartLabels.pop();
    this.chartData.pop();
    this.chartColors[0].backgroundColor.pop();
  };

  public addNewAttr(name: string) {
    this.chartLabels.push(name);
    this.chartData.push(Math.round(Math.random() * 100));
    this.chartColors[0].backgroundColor.push('rgba(108, 187, 168, 1)');
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  } 
}
