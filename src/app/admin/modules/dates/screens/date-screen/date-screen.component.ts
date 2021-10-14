import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDateRangeSelectionStrategy, DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY} from '@angular/material/datepicker';

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
  constructor() {
  }

  ngOnInit(): void {
  }

}
