import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductProviderService } from '@core/providers/products/product-provider.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { Product } from '@models/product.models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  public product: Product | null;
  public event: string;
  public editProductForm: FormGroup;
  public isLoading: boolean;
  public inSale: boolean;

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private fb: FormBuilder,
    private notificationS: NotificationService,
    private productP: ProductProviderService,
    @Inject(MAT_DIALOG_DATA) data: { product: Product, type: string }
  ) { 
    if (data.product) this.product = data.product;
    else this.product = null;
    this.isLoading = false;
    this.event = data.type;
    this.editProductForm = this.fb.group({
      name: [this.product?.name],
      brand: [this.product?.brand],
      description: [this.product?.description],
      stock: [this.product?.stock ? this.product.stock : 0],
      sale: [this.product?.sale ? this.product.sale : null, Validators.required],
    });
    if (this.product?.sale) this.inSale = this.product.sale;
    else this.inSale = false;
  }

  ngOnInit(): void {
  }

  public cleanForm(){
    for(let data in this.editProductForm.controls) {
      (<FormControl>this.editProductForm.controls[data]).setValue(null);
      this.editProductForm.controls[data].setErrors(null);
    };
  };

  public async updateProduct() {
    this.isLoading = true;
    if (this.editProductForm.valid) {
      try {
        let product: Partial<Product> = {
          name: this.editProductForm.value.name,
          brand: this.editProductForm.value.brand,
          description: this.editProductForm.value.description,
          stock: this.editProductForm.value.stock,
          sale: this.editProductForm.value.sale,
          updatedAt: new Date()
        };
        const result = await this.productP.updateProduct(this.product?._id!, product).toPromise();
        if (result) this.isLoading = false;
        this.notificationS.success('Producto actualizado con éxito!');
        this.cleanForm();
        this.dialogRef.close();
      } catch (e) {
        console.log(e);
        this.notificationS.error('No pudimos actualizar el producto, intente otra vez');
        this.isLoading = false;
      }
    } else {
      this.notificationS.error('Algo ocurrió con el formulario, pruebe otra vez');
      this.isLoading = false;
    }
  };
}
