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
    if (data.appointment) {
      this.date = data.appointment;
    } else this.date = null;
    this.isLoading = false;
    this.event = data.type;
    if (data.appointment.patient) this.patient = data.appointment.patient as Pet;
    else this.patient = null;
    this.editDateForm = this.fb.group({
      name: [data.appointment.userName],
      lastName: [data.appointment.userLastName],
      address: [null],
      pet: [this.patient ? this.patient.name : null],
      motion: [data.appointment.state === 3 && data.appointment.motiveCancellation? data.appointment.motiveCancellation : null],
      cancelationResponsable: [data.appointment.state === 3 && data.appointment.responsableCancellation? data.appointment.responsableCancellation : null],
      state: [data.appointment.state, Validators.required],
    });
    this.stateOptions = ['Pendiente', 'Realizada', 'Rechazada'];
    this.address = null;
  }

  async ngOnInit(): Promise<void> {
    this.asociatedUser = await this.userP.getUserById(this.date?.userId!).toPromise();
    this.address = this.asociatedUser.address;
    this.editDateForm.patchValue({
      address: this.address,
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
  get state(): number { return this.editDateForm.get('state')?.value; }

  public async updateApointment(message: boolean) {
    this.isLoading = true;
    if (message){
      // State === 3
      if (this.editDateForm.valid){
      if (this.helper.verifyName(this.name).verify){
          if (this.helper.verifyName(this.petName).verify){
            if (this.helper.verifyName(this.motive).verify){
              if (this.helper.verifyName(this.responsable).verify){
                let appointment: Partial<Appointment> = {
                  patient: this.patient?._id as string,
                  userName: this.name.trim(),
                  userLastName: this.lastName.trim(),
                  state: this.state,
                };
                if (this.state === 3) {
                  appointment.motiveCancellation = this.motive.trim();
                  appointment.responsableCancellation = this.responsable.trim();
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
                this.isLoading = false;
                this.notifications.error('Responsable contiene caracteres invalidos');
              }
            } else {
              this.notifications.error('El motivo tiene caracteres especiales que no están permitidos');
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
    } else {
      //
    };
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
}
