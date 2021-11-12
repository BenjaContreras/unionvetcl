import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Apointment } from '../information-modal/information-modal.component';

@Component({
  selector: 'app-date-book-modal',
  templateUrl: './date-book-modal.component.html',
  styleUrls: ['./date-book-modal.component.sass']
})
export class DateBookModalComponent implements OnInit {

  public event: string;
  public isLoading: boolean;
  public apointment: Apointment;

  constructor(
    private dialogRef: MatDialogRef<DateBookModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { event: string, apointment: Apointment }
  ) { 
    this.isLoading = false;
    this.event = data.event;
    this.apointment = data.apointment;
  }

  ngOnInit(): void {
  }

}
