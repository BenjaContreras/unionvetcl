import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TipProviderService } from '@core/providers/tips/tip-provider.service';
import { HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { Tip } from '@models/tip.models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  public tip: any;
  public event: string;
  public editTipForm: FormGroup;
  public isLoading: boolean;

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private tipsP: TipProviderService,
    private helper: HelperService,
    @Inject(MAT_DIALOG_DATA) data: { tip: Tip, type: string }
  ) {
    this.tip = data.tip;
    this.isLoading = false;
    this.event = data.type;
    this.editTipForm = this.fb.group({
      title: [this.tip?.title, Validators.required],
      content: [this.tip?.content, Validators.required],
      imageUrl: [this.tip?.imageUrl],
    });
  }

  ngOnInit(): void {
  }

  public cleanForm(){
    for(let data in this.editTipForm.controls) {
      (<FormControl>this.editTipForm.controls[data]).setValue(null);
      this.editTipForm.controls[data].setErrors(null);
    };
  };

  public async updateTip() {
    this.isLoading = true;
    if (this.editTipForm.valid) {
      if (this.helper.verifyMessage(this.editTipForm.get('content')?.value).verify) {
        if (this.helper.verifyMessage(this.editTipForm.get('title')?.value).verify) {
          let tip: Tip = {
            title: this.editTipForm.get('title')?.value,
            content: this.editTipForm.get('content')?.value,
            imageUrl: this.editTipForm.get('imageUrl')?.value,
          };
          try {
            const result = await this.tipsP.updateTip(this.tip?._id!, tip).toPromise();
            if (result) this.isLoading = false;
            this.notificationService.success(`Se ha actualizado el tip con exito!`);
            this.cleanForm();
            this.dialogRef.close();
          } catch (e) {
            console.log(e);
            this.isLoading = false;
            this.notificationService.error(`No se pudo actualizar el tip`);
          }
          this.dialogRef.close();
        } else {
          this.isLoading = false;
        this.notificationService.error(`El titulo contiene caracteres invalidos!`);
        };
      } else {
        this.isLoading = false;
        this.notificationService.error(`El contenido contiene caracteres invalidos!`);
      };
    } else {
      this.isLoading = false;
      this.notificationService.error(`Por favor, complete todos los campos requeridos!`);
    }
  };

  public async deleteTip() {
    this.isLoading = true;
    try {
      const result = await this.tipsP.deleteTip(this.tip?._id!).toPromise();
      if (result) this.isLoading = false;
      this.notificationService.success(`Se ha eliminado el tip con exito!`);
      this.dialogRef.close();
    } catch (e) {
      console.log(e);
      this.isLoading = false;
      this.notificationService.error(`No se pudo eliminar el tip`);
    }
  };
}
