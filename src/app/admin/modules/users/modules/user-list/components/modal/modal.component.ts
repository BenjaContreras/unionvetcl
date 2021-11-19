import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserProviderService } from '@core/providers/user/user-provider.service';
import { HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
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
    private helper: HelperService,
    private notifications: NotificationService,
    private userP: UserProviderService,
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

  public async updateUser() {
    this.isLoading = true;
    if (this.editUserForm.valid){
      if (this.helper.verifyRut(this.editUserForm.value.rutOwner)){
        if (this.helper.verifyName(this.editUserForm.value.nameOwner).verify){
          let fullName: string[] = this.transform(this.editUserForm.value.nameOwner.split(' '));
          let user: Partial<User> = {
            firstName: fullName[0],
            lastName: fullName[1],
            rut: this.editUserForm.value.rutOwner,
            address: {
              street: this.editUserForm.value.address,
              commune: this.user?.address?.commune!,
              region: this.user?.address?.region!,
            },
            updatedAt: new Date(),
          };
          try {
            const result = await this.userP.updateUser(this.user?._id!, user).toPromise();
            if (result) this.isLoading = false;
            this.isLoading = false;
            this.notifications.success('Usuario actualizado correctamente!');
            this.dialogRef.close();
          } catch (e) {
            console.log(e);
            this.notifications.error('Error al actualizar el usuario');
            this.isLoading = false;
          }
        } else {
          this.isLoading = false;
          this.notifications.error('El nombre contiene caracteres invalidos');
        }
      } else {
        this.notifications.error('El rut ingresado no es válido');
        this.isLoading = false;
      };
    }
  };

  private transform(name: string[]): string[] {
    let nameAux: string[] = [];
    nameAux[0] = name[0];
    let array = [];
    for (let i = 1; i + 1 <= name.length; i++) {
        array.push(name[i]);
    };
    nameAux[1] = array.join(' ');
    return nameAux;
  };

  public async deleteUser() {
    this.isLoading = true;
    try {
      const result = await this.userP.deleteUser(this.user?._id!).toPromise();
      if (result) this.isLoading = false;
      this.notifications.success('Usuario eliminado correctamente!');
      this.dialogRef.close();
    } catch (e) {
      console.log(e);
      this.notifications.error('Error al eliminar el usuario');
      this.isLoading = false;
    }
  }
}
