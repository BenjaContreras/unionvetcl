import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatesProviderService } from '@core/providers/dates/dates.service';
import { PetProviderService } from '@core/providers/pet/pet-provider.service';
import { UserProviderService } from '@core/providers/user/user-provider.service';
import { HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { Pet } from '@models/pet.models';
import { APIResponse } from '@models/result.models';
import { User } from '@models/user.models';

@Component({
  selector: 'app-create-pet-form-detail',
  templateUrl: './create-pet-form-detail.component.html',
  styleUrls: ['./create-pet-form-detail.component.sass']
})
export class CreatePetFormDetailComponent implements OnInit {

  @Input() owner: User | null;
  @Output() cleanPetEmitter: EventEmitter<any>;
  @Output() expandOption: EventEmitter<boolean>;
  public optionSelected: any;
  public createPetForm: FormGroup;
  public genderControl: FormControl;
  public isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private helperService: HelperService,
    private petProvider: PetProviderService,
    private userP: UserProviderService
  ) {
    this.cleanPetEmitter = new EventEmitter<any>();
    this.expandOption = new EventEmitter<boolean>();
    this.owner = null;
    this.optionSelected = null;
    this.isLoading = false;
    this.genderControl = new FormControl(null, Validators.required);
    this.createPetForm = this.fb.group({
      name: [null, Validators.required],
      breed: [null, Validators.required],
      species: [null, Validators.required],
      color: [null, Validators.required],
      chipNumber: [null, Validators.required],
      gender: this.genderControl,
      age: [null], dateBirth: [null]
    });
    if (this.owner) this.cleanForm();
  }

  public cleanForm(){
    for(let data in this.createPetForm.controls) {
      (<FormControl>this.createPetForm.controls[data]).setValue(null);
      this.createPetForm.controls[data].setErrors(null);
    };
    this.createPetForm.controls['dateBirth'].setValidators(null); 
    this.createPetForm.controls['age'].setValidators(null); 
  };

  public setValidator(know: boolean): void {
    if (know) {
      this.createPetForm.controls['dateBirth'].setValidators(Validators.required); 
    } else {
      this.createPetForm.controls['age'].setValidators(Validators.required);
    };
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
  get age(): number { return this.createPetForm.get('age')?.value };
  get breed(): string { return this.createPetForm.get('breed')?.value };
  get species(): string { return this.createPetForm.get('species')?.value };
  get color(): string { return this.createPetForm.get('color')?.value };
  get chipNumber(): string { return this.createPetForm.get('chipNumber')?.value };
  get gender(): string { return this.createPetForm.get('gender')?.value };
  get dateBirth(): Date { return this.createPetForm.get('dateBirth')?.value };

  async onSubmit(): Promise<any> {
    this.isLoading = true;
    if (this.createPetForm.valid){
      if (this.helperService.verifyName(this.name).verify){
        let newPet: Pet = {
          name: this.name.trim(),
          breed: this.breed.trim(),
          species: this.species.trim(),
          color: this.color.trim(),
          chipNumber: this.chipNumber,
          gender: this.gender.trim()
        };
        if (this.age) newPet.age = this.age;
        else newPet.dateBirth = this.dateBirth;
        try {
          const result: APIResponse = await this.petProvider.postPet(newPet).toPromise() as any;
          if (result) {
            let pets: Pet[] = (await this.userP.getUserById(this.owner?._id!).toPromise())?.pets as Pet[];
            const resultUpdate = await this.userP.updateUserPets(this.owner?._id!, result?.pet?._id!, pets).toPromise();
            if (resultUpdate) {
              this.isLoading = false;
              this.notificationService.success(`Se ha asociado su mascota con éxito a ${this.owner?.firstName} ${this.owner?.lastName}`);
            };
          }
          this.cleanForm();
          this.cleanOwner();
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
      return this.notificationService.error('Formulario invalido, revise los campos asociados');
    };
  }

  ngOnInit(): void {
    if (this.owner) this.cleanForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.owner) {
      this.owner = changes.owner.currentValue;
    }
  }

  ngAfterViewInit(): void {
    if (this.owner) this.cleanForm();
  }

}
