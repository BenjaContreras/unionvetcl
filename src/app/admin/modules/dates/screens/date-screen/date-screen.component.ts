import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDateRangeSelectionStrategy, DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY} from '@angular/material/datepicker';


@Component({
  selector: 'app-date-screen',
  templateUrl: './date-screen.component.html',
  styleUrls: ['./date-screen.component.sass']
})
export class DateScreenComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
