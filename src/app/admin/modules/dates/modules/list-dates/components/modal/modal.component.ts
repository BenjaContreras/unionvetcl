import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatesProviderService } from '@core/providers/dates/dates.service';
import { UserProviderService } from '@core/providers/user/user-provider.service';
import { HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { Address } from '@models/address.models';
import { Appointment } from '@models/date.models';
import { Pet } from '@models/pet.models';
import { User } from '@models/user.models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  public date: Appointment | null;
  public event: string;
  public editDateForm: FormGroup;
  public stateOptions: string[];
  public isLoading: boolean;
  public address: Address | null;
  public patient: Pet | null;
  public asociatedUser: User | null;

  public motion: FormControl;
  public cancelationResponsable: FormControl;

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private fb: FormBuilder,
    private dateP: DatesProviderService,
    private notifications: NotificationService,
    private helper: HelperService,
    private userP: UserProviderService,
    @Inject(MAT_DIALOG_DATA) data: { appointment: Appointment, type: string }
  ) {
    this.asociatedUser = null;
    this.date = data.appointment;
    this.isLoading = false;
    this.event = data.type;
    this.patient = this.date.patient as Pet;
    this.editDateForm = this.fb.group({
      name: [this.date.userName],
      lastName: [this.date.userLastName],
      address: [null],
      pet: [this.patient.name],
      state: [this.transformState(this.date.state, 'go')],
    });
    if (this.date.motiveCancellation && this.date.responsableCancellation) {
      this.motion = new FormControl(this.date.motiveCancellation);
      this.cancelationResponsable = new FormControl(this.date.responsableCancellation);
    } else {
      this.motion = new FormControl(null);
      this.cancelationResponsable = new FormControl(null);
    };
    this.stateOptions = ['Pendiente', 'Realizada', 'Rechazada'];
    this.address = null;
  }

  async ngOnInit(): Promise<void> {
    this.asociatedUser = await this.userP.getUserById(this.date?.userId!).toPromise();
    this.address = this.asociatedUser.address;
    this.editDateForm.patchValue({
      address: this.address.street,
      pet: this.patient?.name,
    });
  }

  public cleanForm(){
    for(let data in this.editDateForm.controls) {
      (<FormControl>this.editDateForm.controls[data]).setValue(null);
      this.editDateForm.controls[data].setErrors(null);
    };
  };

  get name(): string { return this.editDateForm.get('name')?.value; }
  get lastName(): string { return this.editDateForm.get('lastName')?.value; }
  get petName(): string { return this.editDateForm.get('pet')?.value; }
  get motive(): string { return this.editDateForm.get('motion')?.value; }
  get responsable(): string { return this.editDateForm.get('cancelationResponsable')?.value; }
  get state(): string { return this.editDateForm.get('state')?.value; }

  public async updateApointment(message: boolean) {
    this.isLoading = true;
      if (this.editDateForm.valid){
        if (this.helper.verifyName(this.name).verify){
          if (this.helper.verifyName(this.petName).verify){
            let appointment: Partial<Appointment> = {
              patient: this.patient?._id as string,
              userName: this.name.trim(),
              userLastName: this.lastName.trim(),
              state: this.transformState(this.state, 'back'),
            };
            if (this.state === 'Rechazada') {
              if (this.helper.verifyName(this.motive).verify && this.helper.verifyName(this.responsable).verify) {
                appointment.motiveCancellation = this.motion.value.trim();
                appointment.responsableCancellation = this.cancelationResponsable.value.trim();
              } else {
                this.notifications.error('Los motivos y el responsable contienen caracteres invalidos');
                this.isLoading = false;
                return;
              }
            };
            try {
              const result = await this.dateP.updateAppointment(this.date?._id!, appointment).toPromise();
              if (result) this.isLoading = false;
              this.notifications.success('Cita actualizada con éxito!');
              this.dialogRef.close();
              this.cleanForm();
            } catch (e) {
              console.log(e);
              this.notifications.error('Error al actualizar cita');
              this.isLoading = false;
            }
          } else {
            this.notifications.error('Nombre de mascota con caracteres invalidos');
            this.isLoading = false;
          }
        } else {
          this.notifications.error('Nombre con caracteres invalidos');
          this.isLoading = false;
        }
      } else {
        this.notifications.error('Formulario invalido, revise los campos asociados');
        this.isLoading = false;
      }
  };

  public async deleteAppointment() {
    this.isLoading = true;
    try {
      const result = await this.dateP.deleteAppointment(this.date?._id!).toPromise();
      if (result) this.isLoading = false;
      this.notifications.success('Cita eliminada con éxito!');
      this.dialogRef.close();
    } catch (e) {
      console.log(e);
      this.notifications.error('Error al eliminar cita');
      this.isLoading = false;
    }
  };

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
}
