import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProviderService } from '@core/providers/user/user-provider.service';
import { HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { APIResponse } from '@models/result.models';
import { User } from '@models/user.models';

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
    private userProvider: UserProviderService,
  ) {
    this.cleanUserEmitter = new EventEmitter<any>();
    this.isLoading = false;
    this.createUserForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      rut: [null, Validators.compose([
        Validators.required, Validators.minLength(8), Validators.maxLength(9)])
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
  get address(): string { return this.createUserForm.get('address')?.value };
  get phone(): string { return this.createUserForm.get('phone')?.value };
  get rut(): string { return this.createUserForm.get('rut')?.value };
  get commune(): string { return this.createUserForm.get('commune')?.value }
  get region(): string { return this.createUserForm.get('region')?.value }

  async onSubmit(): Promise<any> {
    this.isLoading = true;
    if (this.createUserForm.valid){
      if (this.helperService.verifyRut(this.rut)){
        if (this.helperService.verifyName(this.firstName).verify && this.helperService.verifyName(this.lastName).verify){
          let newUser: User = {
            firstName: this.firstName.trim(),
            lastName: this.lastName.trim(),
            rut: this.rut,
            email: this.email.trim(),
            address: {
              street: this.address.trim(),
              commune: this.commune.trim(),
              region: this.region.trim(),
            },
            phone: this.phone.trim(),
          };
          try {
            const result: APIResponse = await this.userProvider.postUser(newUser).toPromise() as any;
            if (result){
              this.emitUser(result?.user);
              this.isLoading = false;
            } ;
            this.notificationService.success(`Se ha creado el dueño con éxito!`);
            this.cleanForm();
          } catch (e) {
            console.log(e);
            this.isLoading = false;
            this.notificationService.error('No se pudo realizar tu solicitud, intente otra vez');
          }
        } else {
          this.isLoading = false;
          return this.notificationService.error('Ingrese solo su nombre, sin caracteres especiales');
        };
      } else {
        this.isLoading = false;
        return this.notificationService.error('RUT invalido, intente con otro rut!');
      };
    } else {
      this.isLoading = false;
      return this.notificationService.error('El formulario no es valido, por favor revise los campos asociados!');
    };
  }

  ngOnInit(): void {
  }

}
