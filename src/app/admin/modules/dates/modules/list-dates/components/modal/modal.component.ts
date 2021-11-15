import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  public date: any;
  public event: string;
  public editDateForm: FormGroup;
  public stateOptions: string[];
  public isLoading: boolean;

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { appointment: any, type: string }
  ) {
    if (data.appointment) {
      this.date = data.appointment;
    };
    this.isLoading = false;
    this.event = data.type;
    this.editDateForm = this.fb.group({
      nameOwner: [this.date.name],
      rutOwner: [this.date.rut],
      address: [this.date.address],
      petName: [this.date.animal],
      motion: [null],
      cancelationResponsable: [null],
      state: [null, Validators.required],
    });
    this.stateOptions = ['Pendiente', 'Realizada', 'Rechazada'];
  }

  ngOnInit(): void {
  }

  public cleanForm(){
    for(let data in this.editDateForm.controls) {
      (<FormControl>this.editDateForm.controls[data]).setValue(null);
      this.editDateForm.controls[data].setErrors(null);
    };
  };

  public updateApointment(message: boolean) {
    this.isLoading = true;
    if (message){
      //
    } else {
      //
    };
  };
}
