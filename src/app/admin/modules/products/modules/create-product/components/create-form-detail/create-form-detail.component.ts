import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductProviderService } from '@core/providers/products/product-provider.service';
import { Block, HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-create-form-detail',
  templateUrl: './create-form-detail.component.html',
  styleUrls: ['./create-form-detail.component.sass']
})
export class CreateFormDetailComponent implements OnInit {

  client: any;
  public createProductForm: FormGroup;
  public isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private productProvider: ProductProviderService,
  ) {
    this.isLoading = false;
    this.createProductForm = this.fb.group({
      imageUrl: [""],
      brand: [null, Validators.required],
      name: [null, Validators.required],
      description: [null, Validators.required],
      stock: [0],
      sale: [false],
      category: [null, Validators.required],
    });
  }

  public cleanForm(){
    for(let data in this.createProductForm.controls) {
      (<FormControl>this.createProductForm.controls[data]).setValue(null);
      this.createProductForm.controls[data].setErrors(null);
    };
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
      } catch (e) {
        console.log(e);
        this.notificationService.error('No se pudo realizar tu solicitud, intente otra vez');
      }
    };
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterViewInit(): void {

  }

}
