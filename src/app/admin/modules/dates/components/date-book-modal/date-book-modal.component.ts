import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Block, HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
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
  public editDateForm: FormGroup;
  public stateOptions: string[];
  public blocks: Block[];
  public day: Date | null;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DateBookModalComponent>,
    private helper: HelperService,
    private notifications: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: { event: string, apointment: Apointment }
  ) { 
    this.isLoading = false;
    this.event = data.event;
    this.blocks = this.helper.blocks;
    this.apointment = data.apointment;
    if (this.apointment.week.init && this.apointment.week.end) {
      this.day = this.setAtentionDay(this.apointment.week.init, this.apointment.week.end, this.apointment.day);
    } else this.day = null;
    this.editDateForm = this.fb.group({
      owner: [this.apointment.date.owner ? this.apointment.date.owner : null],
      state: [this.apointment.date.state ? this.transformState(this.apointment.date.state, 'go') : null],
      block: [this.apointment.block ? this.apointment.block : null],
      patient: [this.apointment.patient ? this.apointment.patient : null],
      day: [this.day ? this.day : null, Validators.required],
      month: [this.apointment.month ? this.apointment.month : this.transformMonth(new Date().getMonth() + 1)],
      motion: [this.apointment.date.state === 3 && this.apointment.motion ? this.apointment.motion : [null, Validators.required]],
    });
    this.stateOptions = ['Pendiente', 'Realizada', 'Rechazada'];
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  ngOnInit(): void {
  }

  private transformState(state: any, event: string): any {
    if (event === 'go') {
      switch (state) {
        case 1:
          return 'Pendiente';
        case 2:
          return 'Realizada';
        case 3:
          return 'Rechazada';
        default:
          return '';
      };
    };
    if (event === 'back') {
      switch (state) {
        case 'Pendiente':
          return 1;
        case 'Realizada':
          return 2;
        case 'Rechazada':
          return 3;
        default:
          return 0;
      };
    };
  };

  private setAtentionDay(init: number, end: number, day: number): Date {
    switch (day) {
      case 1:
        return new Date(new Date().getFullYear(), new Date().getMonth(), init);
      case 2:
        return new Date(new Date().getFullYear(), new Date().getMonth(), init + 1);
      case 3:
        return new Date(new Date().getFullYear(), new Date().getMonth(), init + 2);
      case 4:
        return new Date(new Date().getFullYear(), new Date().getMonth(), end - 1);
      case 5:
        return new Date(new Date().getFullYear(), new Date().getMonth(), end);
      default: return new Date();
    };
  };

  private transformMonth(month: number): string {
    switch (month) {
      case 1:
        return 'Enero';
      case 2:
        return 'Febrero';
      case 3:
        return 'Marzo';
      case 4:
        return 'Abril';
      case 5:
        return 'Mayo';
      case 6:
        return 'Junio';
      case 7:
        return 'Julio';
      case 8:
        return 'Agosto';
      case 9:
        return 'Septiembre';
      case 10:
        return 'Octubre';
      case 11:
        return 'Noviembre';
      case 12:
        return 'Diciembre';
      default:
        return '';
    }
  };

  public editAppointment(): void {
    this.isLoading = true;
    this.editDateForm.patchValue({
      state: this.transformState(this.editDateForm.value.state, 'back'),
    });
    setTimeout(() => {
      this.notifications.success('Cita editada con éxito!');
      this.dialogRef.close();
      this.isLoading = false;
    }, 2000);
  };

  public deleteAppointment(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.notifications.success('Cita eliminada con éxito!');
      this.dialogRef.close();
      this.isLoading = false;
    }, 2000);
  };
}
