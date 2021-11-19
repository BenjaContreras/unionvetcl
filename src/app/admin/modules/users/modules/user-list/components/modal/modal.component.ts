import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pet } from '@models/pet.models';
import { User } from '@models/user.models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  public user: User | null;
  public event: string;
  public editUserForm: FormGroup;
  public stateOptions: {type: string, value: number}[];
  public isLoading: boolean;
  public animals: Pet[];

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { user: User, type: string }
  ) {
    this.animals = [];
    if (data.user) {
      this.user = data.user;
    } else this.user = null;
    this.isLoading = false;
    this.event = data.type;
    let fullName = data.user?.firstName + ' ' + data.user?.lastName;
    let temporalAddress = data.user?.address?.street
    this.animals = data.user?.pets as Pet[];
    this.editUserForm = this.fb.group({
      nameOwner: [fullName],
      rutOwner: [data.user?.rut],
      address: [temporalAddress ? temporalAddress : 'Sin dirección']
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
    for(let data in this.editUserForm.controls) {
      (<FormControl>this.editUserForm.controls[data]).setValue(null);
      this.editUserForm.controls[data].setErrors(null);
    };
  };

  public updateUser() {
    this.isLoading = true;
    this.dialogRef.close();
    this.isLoading = false;
  };

  public deleteUser() {
    this.isLoading = true;
    this.dialogRef.close();
    this.isLoading = false;
  }
}
