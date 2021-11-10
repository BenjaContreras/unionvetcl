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
  public editProductForm: FormGroup;
  public stateOptions: {type: string, value: number}[];
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
    this.editProductForm = this.fb.group({
      nameOwner: [this.date.name],
      rutOwner: [this.date.rut],
      address: [this.date.address],
      petName: [this.date.animal],
      motion: [null],
      state: [null, Validators.required],
    });
    this.stateOptions = [
      { type: 'Pendiente', value: 1 },
      { type: 'Realizada', value: 2 },
      { type: 'Cancelada', value: 3 },
    ];
  }

  ngOnInit(): void {
  }

  public cleanForm(){
    for(let data in this.editProductForm.controls) {
      (<FormControl>this.editProductForm.controls[data]).setValue(null);
      this.editProductForm.controls[data].setErrors(null);
    };
  };

  public updateProduct(message: boolean) {
    this.isLoading = true;
    if (message){
      //
    } else {
      //
    };
  };
}
