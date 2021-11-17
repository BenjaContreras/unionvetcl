import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ProductProviderService } from '@core/providers/products/product-provider.service';
import { Block, HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { Product } from '@models/product.models';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-create-form-detail',
  templateUrl: './create-form-detail.component.html',
  styleUrls: ['./create-form-detail.component.sass']
})
export class CreateFormDetailComponent implements OnInit, AfterViewInit, OnChanges {

  client: any;
  public createProductForm: FormGroup;
  public isLoading: boolean;
  public categoryFrmCtrl: FormControl = new FormControl(null, Validators.required);
  public categoryFrmFilterCtrl: FormControl = new FormControl(null);
  public filteredCategories: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);
  protected onDestroy = new Subject<void>();
  public categories: string[];
  public newCategory: boolean;
  public validForm: boolean;

  @ViewChild('singleSelect') singleSelect!: MatSelect;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private productProvider: ProductProviderService,
    private helper: HelperService
  ) {
    this.validForm = true;
    this.newCategory = false;
    this.isLoading = false;
    this.createProductForm = this.fb.group({
      imageUrl: [null],
      brand: [null, Validators.required],
      name: [null, Validators.required],
      description: [null, Validators.required],
      stock: [0],
      sale: [false],
      category: [null, Validators.required],
    });
    this.categories = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
  };

  public cleanForm(){
    for(let data in this.createProductForm.controls) {
      (<FormControl>this.createProductForm.controls[data]).setValue(null);
      this.createProductForm.controls[data].setErrors(null);
    };
    this.categoryFrmCtrl.setValue(null);
    this.categoryFrmCtrl.setErrors(null);
    this.newCategory = false;
    this.validForm = false;
  };

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  get imageUrl(): string { return this.createProductForm.get('imageUrl')?.value };
  get brand(): string { return this.createProductForm.get('brand')?.value };
  get name(): string { return this.createProductForm.get('name')?.value };
  get description(): string { return this.createProductForm.get('description')?.value };
  get stock(): number { return this.createProductForm.get('stock')?.value };
  get sale(): boolean { return this.createProductForm.get('sale')?.value };
  get category(): string { return this.createProductForm.get('category')?.value };

  async onSubmit(): Promise<any> {
    if (this.createProductForm.valid){
      let newProduct: Product = {
        imageUrl: this.imageUrl,
        brand: this.brand,
        name: this.name,
        description: this.description,
        stock: this.stock,
        category: this.category,
      };
      try {
        this.isLoading = true;
        const result = await this.productProvider.postProduct(newProduct).toPromise();
        if (result) this.isLoading = false;
        this.notificationService.success(`Se ha creado el producto con exito!`);
        this.cleanForm();
        await this.ngOnInit();
        this.ngAfterViewInit();
      } catch (e) {
        this.isLoading = false;
        console.log(e);
        this.notificationService.error('No se pudo realizar tu solicitud, intente otra vez');
      }
    };
  }

  async ngOnInit(): Promise<void> {
    this.categories = await this.helper.getCategories();
    this.categoryFrmCtrl.setValue(null);
    this.filteredCategories.next(this.categories.slice());
    this.categoryFrmFilterCtrl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.filterCategories();
      });
  }

  ngAfterViewInit(): void {
    this.setInitialValue();
  };

  public setSelectedCategory(category: any): void {
    if (category.value === 'Crear categoria'){ 
      this.newCategory = true;
      this.createProductForm.controls['category'].setValue(null);
      this.createProductForm.controls['category'].setErrors(null);
    } else this.createProductForm.controls['category'].setValue(category.value);
  };
  
  protected setInitialValue(): void {
    this.filteredCategories
    .pipe(take(1), takeUntil(this.onDestroy)).subscribe(() => {
      this.singleSelect.compareWith = (a: any, b: any) => a && b && a === b;
    });
  };

  protected filterCategories(): void {
    if (!this.categories) return;
    let search = this.categoryFrmFilterCtrl.value;
    if (!search) {
      this.filteredCategories.next(this.categories.slice());
      return;
    } else search = search.toLowerCase();
    this.filteredCategories.next(
      this.categories.filter(category => category.toLowerCase().includes(search))
    );
  };
}
