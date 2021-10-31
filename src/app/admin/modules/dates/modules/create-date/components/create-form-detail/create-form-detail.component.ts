import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatesProviderService } from '@core/providers/dates/dates.service';
import { Block, HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { DateModel } from '@models/date.models';

@Component({
  selector: 'app-create-form-detail',
  templateUrl: './create-form-detail.component.html',
  styleUrls: ['./create-form-detail.component.sass']
})
export class CreateFormDetailComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() client: any;
  @Output() cleanClientEmitter: EventEmitter<any>;
  public createDateForm: FormGroup;
  public regionSelected: string;
  public communes: string[];
  public regiones: string[];
  public blocks: Block[];
  public isLoading: boolean;

  constructor(
    private fb: FormBuilder, 
    private helperService: HelperService,
    private notificationService: NotificationService,
    private dateProvider: DatesProviderService,
  ) {
    this.cleanClientEmitter = new EventEmitter<any>();
    this.client = null;
    this.isLoading = false;
    this.createDateForm = this.fb.group({
      fullName: [null, Validators.required],
      RUT: [null, Validators.compose([
        Validators.required, Validators.minLength(9), Validators.maxLength(9)])
      ],
      address: [null, Validators.required],
      region: [null, Validators.required],
      commune: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.required, Validators.email])
      ],
      day: [null, Validators.required],
      block: [null, Validators.required],
      phone: [null, Validators.compose([
        Validators.required, Validators.minLength(9), Validators.maxLength(9)])
      ],
    });
    this.regionSelected = '';
    this.blocks = this.helperService.blocks;
    this.communes = [];
    this.regiones = this.helperService.communes.map(commune => commune.name);
    if (this.client) this.cleanForm();
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
    for(let data in this.createDateForm.controls) {
      (<FormControl>this.createDateForm.controls[data]).setValue(null);
      this.createDateForm.controls[data].setErrors(null);
    };
    this.regionSelected = '';
  };

  public cleanClient(){
    this.cleanClientEmitter.emit(null);
  };

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  get fullName(): string { return this.createDateForm.get('fullName')?.value };
  get rut(): string { return this.createDateForm.get('RUT')?.value };
  get address(): string { return this.createDateForm.get('address')?.value };
  get region(): string { return this.createDateForm.get('region')?.value };
  get commune(): string { return this.createDateForm.get('commune')?.value };
  get email(): string { return this.createDateForm.get('email')?.value };
  get day(): string { return this.createDateForm.get('day')?.value };
  get block(): string { return this.createDateForm.get('block')?.value };
  get phone(): string { return this.createDateForm.get('phone')?.value };
  get street(): string { return this.address.split(',')[0] };
  get number(): string { return this.address.split(',')[1] };

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