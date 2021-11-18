import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { DatesProviderService } from '@core/providers/dates/dates.service';
import { PetProviderService } from '@core/providers/pet/pet-provider.service';
import { Block, HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { DateModel } from '@models/date.models';
import { Pet } from '@models/pet.models';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

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
  public patients: Pet[];
  public selectedPatient: Pet | null;

  public petFrmCtrl: FormControl = new FormControl(null);
  public petFrmFilterCtrl: FormControl = new FormControl(null);
  public filteredPets: ReplaySubject<Pet[]> = new ReplaySubject<Pet[]>(1);
  protected onDestroy = new Subject<void>();

  @ViewChild('singleSelect') singleSelect!: MatSelect;

  constructor(
    private fb: FormBuilder, 
    private helperService: HelperService,
    private notificationService: NotificationService,
    private dateProvider: DatesProviderService,
    private petP: PetProviderService
  ) {
    this.cleanClientEmitter = new EventEmitter<any>();
    this.client = null;
    this.isLoading = false;
    this.patients = [];
    this.createDateForm = this.fb.group({
      pet: [null, Validators.required],
      address: [null, Validators.required],
      region: [null, Validators.required],
      commune: [null, Validators.required],
      email: [
        null, Validators.compose([Validators.required, Validators.email]),
      ],
      day: [null, Validators.required],
      block: [null, Validators.required],
      phone: [
        null, Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      ],
    });
    this.regionSelected = '';
    this.blocks = this.helperService.blocks;
    this.communes = [];
    this.regiones = this.helperService.communes.map(commune => commune.name);
    if (this.client) this.cleanForm();
    this.selectedPatient = null;
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
  get day(): Date { return this.createDateForm.get('day')?.value };
  get block(): number { return this.createDateForm.get('block')?.value };
  get phone(): string { return this.createDateForm.get('phone')?.value };
  get street(): string { return this.address.split(',')[0] };
  get number(): string { return this.address.split(',')[1] };

  async onSubmit(): Promise<any> {
    if (this.createDateForm.valid){
      if (this.helperService.verifyRut(this.rut)){
        if (this.helperService.verifyName(this.fullName).verify){
          let newDate: DateModel = {
            date: {
              day: this.day.getDate(), 
              month: this.day.getMonth() + 1, 
              year: this.day.getFullYear()
            },
            block: this.block,
            patient: 'patientId'
          };  
          try {
            this.isLoading = true;
            // const result = await this.dateProvider.postDate(newDate).toPromise();
            // if (result) this.isLoading = false;
            this.notificationService.success(`Se ha creado la cita para el dia ${this.day} en el bloque ${this.block}`);
            this.cleanForm();
          } catch (e) {
            console.log(e);
            this.notificationService.error('No se pudo realizar tu solicitud, intente otra vez');
          }
        } else {
          return this.notificationService.error('Ingrese solo su nombre, sin caracteres especiales');
        };
      } else {
        return this.notificationService.error('RUT invalido, intente con otro correo!');
      };
    };
  }

  async ngOnInit(): Promise<void> {
    this.patients = this.client?.value.pets as Pet[];
    this.setFormAgain();
    this.petFrmCtrl.setValue(null);
    this.filteredPets.next(this.patients?.slice());
    this.petFrmFilterCtrl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.filterPets();
      });
  }

  private setFormAgain(){
    this.createDateForm.setValue({
      pet: null,
      region: this.client?.value.address?.region,
      commune: this.client?.value.address?.commune,
      address: this.client?.value.address?.street,
      email: this.client?.value.email,
      phone: this.client?.value.phone,
      day: null,
      block: null,
    });
  };

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes.client) await this.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.setInitialValue();
  }

  protected setInitialValue(): void {
    this.filteredPets
    .pipe(take(1), takeUntil(this.onDestroy)).subscribe(() => {
      this.singleSelect.compareWith = (a: any, b: any) => a && b && a === b;
    });
  };

  protected filterPets(): void {
    if (!this.patients) return;
    let search = this.petFrmFilterCtrl.value;
    if (!search) {
      this.filteredPets.next(this.patients.slice());
      return;
    } else search = search.toLowerCase();
    this.filteredPets.next(
      this.patients.filter(patient => patient.name.toLowerCase().includes(search))
    );
  };

  public setSelectedPet(client: any): void {
    this.selectedPatient = client.value;
    this.createDateForm.patchValue({
      pet: this.selectedPatient
    });
  };
}