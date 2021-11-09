import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-information-modal',
  templateUrl: './information-modal.component.html',
  styleUrls: ['./information-modal.component.sass']
})
export class InformationModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InformationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {date: any, patient: string, day: string, time: {inicio: Date, fin: Date}},
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
