import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateBookModalComponent } from '../date-book-modal/date-book-modal.component';

export interface Apointment {
  date: {
    owner: string,
    state: number
  },
  time: {
    start: Date,
    end: Date
  },
  patient: string,
  day: string
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
    @Inject(MAT_DIALOG_DATA) public data: {date: any, patient: string, day: string, time: {inicio: Date, fin: Date}},
  ) {
    this.apointment = {
      date: {
        owner: this.data.date.fullName,
        state: this.data.date.state
      },
      time: {
        start: data.time.inicio,
        end: data.time.fin
      },
      patient: data.patient,
      day: data.day
    };
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  public openModal(event: string){
    this.close();
    this.dialog.open(DateBookModalComponent,{
      data: {
        event: event,
        apointment: this.apointment
      }
    });
  };
}
