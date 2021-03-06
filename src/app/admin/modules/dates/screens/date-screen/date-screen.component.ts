import { Router } from '@angular/router';
import { Component, HostListener, Inject, Injectable, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDateRangeSelectionStrategy, DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY} from '@angular/material/datepicker';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import 'moment/locale/es';
import { HelperService } from '@core/services/helper/helper.service';
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

@Injectable()
export class FiveDayRangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
  constructor(private _dateAdapter: DateAdapter<D>) {}

  selectionFinished(date: D | null): DateRange<D> {
    return this._createFiveDayRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createFiveDayRange(activeDate);
  }

  private _createFiveDayRange(date: D | null): DateRange<D> {
    if (date) {
      const start = this._dateAdapter.addCalendarDays(date, -2);
      const end = this._dateAdapter.addCalendarDays(date, 2);
      return new DateRange<D>(start, end);
    }

    return new DateRange<D>(null, null);
  }
}

@Component({
  selector: 'app-date-screen',
  templateUrl: './date-screen.component.html',
  providers: [
    { provide: MAT_DATE_RANGE_SELECTION_STRATEGY, useClass: FiveDayRangeSelectionStrategy }
  ],
  styleUrls: ['./date-screen.component.sass']
})
export class DateScreenComponent implements OnInit {

  public mes!: string;
  public clicked: boolean;
  public range: FormGroup;
  public rango: string;
  public dateTopSelected: any;
  public dateBottomSelected: any;
  public isAdmin: boolean;
  public weekInit: number;
  public weekEnd: number;
  public isAfter: boolean;

  constructor(
    private router: Router,
    private helperService: HelperService,
  ) {
    this.isAdmin = this.helperService.isAdmin;
    this.clicked = false;
    this.rango = this.setRango();
    this.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });
    this.weekInit = moment().startOf('week').toDate().getDate();
    this.weekEnd = moment().startOf('week').toDate().getDate() + 4;
    if (new Date().getDay() > 5) this.isAfter = true;
    else this.isAfter = false;
    const month: number = new Date().getMonth() + 1;
    switch (month) {
      case 1: this.mes = 'Enero';
        break;
      case 2: this.mes = 'Febrero';
        break;
      case 3: this.mes = 'Marzo';
        break;
      case 4: this.mes = 'Abril';
        break;
      case 5: this.mes = 'Mayo';
        break;
      case 6: this.mes = 'Junio';
        break;
      case 7: this.mes = 'Julio';
        break;
      case 8: this.mes = 'Agosto';
        break;
      case 9: this.mes = 'Septiembre';
        break;
      case 10: this.mes = 'Octubre';
        break;
      case 11: this.mes = 'Noviembre';
        break;
      case 12: this.mes = 'Diciembre';
        break;
    };
  }

  ngOnInit(): void {
    this.isAdmin = this.helperService.isAdmin;
  }

  public setRango(): string {
    let start = moment().startOf('week').format('dddd DD');
    let startAux = moment().startOf('week').toDate();
    let end = moment([
      startAux.getFullYear(), 
      startAux.getMonth(), 
      startAux.getDate() + 4,
    ]).format('dddd DD');
    return `${start} - ${end}`;
  };

  public verifySelectedTopDate(event: any): void {
    if (event.state === 0) this.dateTopSelected = null;
    else this.dateTopSelected = event;
    this.dateBottomSelected = null;
  };

  public verifySelectedBottomDate(event: any): void {
    if (event.state === 0) this.dateBottomSelected = null;
    else this.dateBottomSelected = event;
    this.dateTopSelected = null;
  };
}
