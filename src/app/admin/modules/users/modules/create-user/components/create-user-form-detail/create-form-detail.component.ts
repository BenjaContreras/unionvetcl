import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';

@Component({
  selector: 'app-create-form-detail',
  templateUrl: './create-form-detail.component.html',
  styleUrls: ['./create-form-detail.component.sass']
})
export class CreateFormDetailComponent implements OnInit {

  @Output() cleanUserEmitter: EventEmitter<any>;
  public createUserForm: FormGroup;
  public regionSelected: string;
  public communes: string[];
  public regiones: string[];
  public isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private helperService: HelperService,
    private notificationService: NotificationService,
    // private userProvider: UserProviderService,
  ) {
    this.cleanUserEmitter = new EventEmitter<any>();
    this.isLoading = false;
    this.createUserForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      rut: [null, Validators.compose([
        Validators.required, Validators.minLength(9), Validators.maxLength(9)])
      ],
      address: [null, Validators.required],
      region: [null, Validators.required],
      commune: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.required, Validators.email])
      ],
      phone: [null, Validators.compose([
        Validators.required, Validators.minLength(9), Validators.maxLength(9)])
      ],
    });
    this.regionSelected = '';
    this.communes = [];
    this.regiones = this.helperService.communes.map(commune => commune.name);
  }

  public setRegionSelected(region: string): void {
    this.regionSelected = region;
    this.communes = this.getCommunes(region);
  };

  private getCommunes(region: string): string[] {
    const regionAux = this.helperService.communes.find(commune => commune?.name === region);
    if (regionAux) return regionAux.communes;
    else return [];
  };

  public cleanForm(){
    for(let data in this.createUserForm.controls) {
      (<FormControl>this.createUserForm.controls[data]).setValue(null);
      this.createUserForm.controls[data].setErrors(null);
    };
    this.regionSelected = '';
  };

  public emitUser(user: any){
    this.cleanUserEmitter.emit(user);
  };

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  get firstName(): string { return this.createUserForm.get('firstName')?.value };
  get lastName(): string { return this.createUserForm.get('lastName')?.value };
  get email(): string { return this.createUserForm.get('email')?.value };
  get password(): string { return this.createUserForm.get('password')?.value };
  get address(): string { return this.createUserForm.get('address')?.value };
  get phone(): string { return this.createUserForm.get('phone')?.value };
  get rut(): string { return this.createUserForm.get('rut')?.value };
  get commune(): string { return this.createUserForm.get('commune')?.value }
  get region(): string { return this.createUserForm.get('region')?.value }

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
    //         // this.emitUser(result);
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
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngAfterViewInit(): void {
  }

}
