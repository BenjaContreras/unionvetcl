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

  @Input() owner: any;
  @Output() cleanPetEmitter: EventEmitter<any>;
  @Output() expandOption: EventEmitter<boolean>;
  public optionSelected: any;
  public createPetForm: FormGroup;
  public isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    // private petProvider: PetProviderService,
  ) {
    this.cleanPetEmitter = new EventEmitter<any>();
    this.expandOption = new EventEmitter<boolean>();
    this.owner = null;
    this.optionSelected = null;
    this.isLoading = false;
    this.createPetForm = this.fb.group({
      name: [null, Validators.required],
      age: [null, Validators.required],
      breed: [null, Validators.required],
      species: [null, Validators.required],
      color: [null, Validators.required],
      chipNumber: [null, Validators.required],
      gender: [null, Validators.required],
      dateBirth: [null, Validators.required]
    });
    if (this.owner) this.cleanForm();
  }

  public cleanForm(){
    for(let data in this.createPetForm.controls) {
      (<FormControl>this.createPetForm.controls[data]).setValue(null);
      this.createPetForm.controls[data].setErrors(null);
    };
    this.optionSelected = null;
  };

  public cleanOwner(){
    this.cleanPetEmitter.emit(null);
    this.owner = null;
  };

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  get name(): string { return this.createPetForm.get('name')?.value };
  get age(): string { return this.createPetForm.get('age')?.value };
  get breed(): string { return this.createPetForm.get('breed')?.value };
  get species(): string { return this.createPetForm.get('species')?.value };
  get color(): string { return this.createPetForm.get('color')?.value };
  get chipNumber(): string { return this.createPetForm.get('chipNumber')?.value };
  get gender(): string { return this.createPetForm.get('gender')?.value };
  get dateBirth(): string { return this.createPetForm.get('dateBirth')?.value };

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
    if (this.owner) this.cleanForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.client.currentValue === this.owner) this.cleanForm();
    if (this.owner) this.cleanForm();
  }

  ngAfterViewInit(): void {
    if (this.owner) this.cleanForm();
  }

}
