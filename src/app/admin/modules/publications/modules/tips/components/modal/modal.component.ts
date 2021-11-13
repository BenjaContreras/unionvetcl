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
  public editTipForm: FormGroup;
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
    this.editTipForm = this.fb.group({
      title: [this.date.title],
      content: [this.date.content],
      imageUrl: [this.date.imageUrl],
    });
  }

  ngOnInit(): void {
  }

  public cleanForm(){
    for(let data in this.editTipForm.controls) {
      (<FormControl>this.editTipForm.controls[data]).setValue(null);
      this.editTipForm.controls[data].setErrors(null);
    };
  };

  public updateTip(message: boolean) {
    this.isLoading = true;
    if (message){
      //
    } else {
      //
    };
  };
}
