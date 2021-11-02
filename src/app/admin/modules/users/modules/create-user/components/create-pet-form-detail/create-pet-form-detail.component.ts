import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatesProviderService } from '@core/providers/dates/dates.service';
import { NotificationService } from '@core/services/notification/notification.service';

@Component({
  selector: 'app-create-pet-form-detail',
  templateUrl: './create-pet-form-detail.component.html',
  styleUrls: ['./create-pet-form-detail.component.sass']
})
export class CreatePetFormDetailComponent implements OnInit {

  client: any;
  @Output() cleanClientEmitter: EventEmitter<any>;
  public createDateForm: FormGroup;
  public isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private dateProvider: DatesProviderService,
  ) {
    this.cleanClientEmitter = new EventEmitter<any>();
    this.client = null;
    this.isLoading = false;
    this.createDateForm = this.fb.group({
      name: [null, Validators.required],
      age: [null, Validators.required],
      breed: [null, Validators.required],
      species: [null, Validators.required],
      color: [null, Validators.required],
      chipNumber: [null, Validators.required],
      gender: [null, Validators.required],
      dateBirth: [null, Validators.required]
    });
    if (this.client) this.cleanForm();
  }

  public cleanForm(){
    for(let data in this.createDateForm.controls) {
      (<FormControl>this.createDateForm.controls[data]).setValue(null);
      this.createDateForm.controls[data].setErrors(null);
    };
  };

  public cleanClient(){
    this.cleanClientEmitter.emit(null);
  };

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  get name(): string { return this.createDateForm.get('name')?.value };
  get age(): string { return this.createDateForm.get('age')?.value };
  get breed(): string { return this.createDateForm.get('breed')?.value };
  get species(): string { return this.createDateForm.get('species')?.value };
  get color(): string { return this.createDateForm.get('color')?.value };
  get chipNumber(): string { return this.createDateForm.get('chipNumber')?.value };
  get gender(): string { return this.createDateForm.get('gender')?.value };
  get dateBirth(): string { return this.createDateForm.get('dateBirth')?.value };

  async onSubmit(): Promise<any> {
    // if (this.createDateForm.valid){
    //   if (this.helperService.verifyRut(this.rut)){
    //     if (this.helperService.verifyName(this.fullName).verify){
    //       let newDate: DateModel = {
    //         day: this.day,
    //         block: this.block,
    //         user: {
    //           fullName: this.fullName,
    //           RUT: this.rut,
    //           address: {
    //             region: this.region,
    //             commune: this.commune,
    //             street: this.street,
    //             number: this.number,
    //           },
    //           email: this.email,
    //           phone: this.phone,
    //         }
    //       };
    //       try {
    //         this.isLoading = true;
    //         // const result = await this.dateProvider.postDate(newDate).toPromise();
    //         // if (result) this.isLoading = false;
    //         this.notificationService.success(`Se ha creado la cita para el dia ${this.day} en el bloque ${this.block}`);
    //         this.cleanForm();
    //       } catch (e) {
    //         console.log(e);
    //         this.notificationService.error('No se pudo realizar tu solicitud, intente otra vez');
    //       }
    //     } else {
    //       return this.notificationService.error('Ingrese solo su nombre, sin caracteres especiales');
    //     };
    //   } else {
    //     return this.notificationService.error('RUT invalido, intente con otro correo!');
    //   };
    // };
  }

  ngOnInit(): void {
    if (this.client) this.cleanForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.client.currentValue === this.client) this.cleanForm();
    if (this.client) this.cleanForm();
  }

  ngAfterViewInit(): void {
    if (this.client) this.cleanForm();
  }

}
