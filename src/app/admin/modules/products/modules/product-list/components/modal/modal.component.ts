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
  public isLoading: boolean;
  public inSale: boolean;

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
    if (this.date.stock){
      this.editProductForm = this.fb.group({
        name: [this.date.name],
        brand: [this.date.brand],
        description: [this.date.description],
        stock: [this.date.stock],
        sale: [this.date.sale],
      });
    } else {
      this.editProductForm = this.fb.group({
        name: [this.date.name],
        brand: [this.date.brand],
        description: [this.date.description],
        stock: [0],
        sale: [this.date.sale],
      });
    };
    if (this.date.sale)
      if (this.date.sale === 'Si') this.inSale = true;
      else this.inSale = false;
    else this.inSale = false;
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
