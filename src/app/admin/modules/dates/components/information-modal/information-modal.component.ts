import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateBookModalComponent } from '../date-book-modal/date-book-modal.component';

export interface Apointment {
  date: {
    owner: string,
    state: number
  },
  block: number
  patient: string,
  day: number,
  month: string,
  motion: string | null
  week: {init: number, end: number }
};

@Component({
  selector: 'app-information-modal',
  templateUrl: './information-modal.component.html',
  styleUrls: ['./information-modal.component.sass']
})
export class InformationModalComponent implements OnInit {

  public apointment: Apointment;

  constructor(
    private dialogRef: MatDialogRef<InformationModalComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: {date: any, patient: string, day: number, week: {init: number, end: number}, time: number, month: string},
  ) {
    this.apointment = {
      date: {
        owner: this.data.date.fullName,
        state: this.data.date.state
      },
      block: this.data.time,
      patient: data.patient,
      day: data.day,
      week: { init: data.week.init, end: data.week.end },
      month: data.month,
      motion: null
    };
  }

  ngOnInit(): void {
  }

  public openModal(event: string){
    this.dialogRef.close();
    this.dialog.open(DateBookModalComponent,{
      width: '600px',
      data: {
        event: event,
        apointment: this.apointment
      }
    });
  };
}
