import { Location } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecoverPasswordService } from '@core/providers/recover-password/recover-password.service';
import { HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { ForgottenPassword } from '@models/forgotten.models';
import { PasswordRecoverResponse } from '@models/password.models';

@Component({
  selector: 'app-forgot-form',
  templateUrl: './forgot-form.component.html',
  styleUrls: ['./forgot-form.component.sass']
})
export class ForgotFormComponent {

  public isLoading: boolean;
  public hover: boolean;
  public addressForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private notificationService: NotificationService,
    private recoverProvider: RecoverPasswordService,
    private helperService: HelperService,
    private location: Location
  ) {
    this.isLoading = false;
    this.hover = false;
    this.addressForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  public async login() {
    const email: string = this.addressForm.get('email')?.value;
    if (email && this.helperService.verifyMail(email).verify) {
      try {
        if (this.addressForm.valid){
          this.isLoading = true;
          const result: ForgottenPassword = await this.recoverProvider.sendLinkToEmail(email).toPromise();
          if (result.status === 200) {
            this.notificationService.success('Código enviado con éxito!');
            this.isLoading = false;
          } else {
            this.notificationService.error('Algo ha sucedido');
            this.isLoading = false;
            throw new Error("Problema al enviar el código");
          };
        };
      } catch (e) {
        console.log(e);
        this.notificationService.error('No pudimos enviarle el código, intente otra vez');
        this.cleanForm();
        this.isLoading = false;
      };
    } else {
      this.notificationService.error('El correo no se encuentra en nuestros registros');
      this.cleanForm();
    };
  };

  public backPreviousPage(){
    this.location.back();
  };

  private cleanForm(){
    for(let data in this.addressForm.controls) {
      (<FormControl>this.addressForm.controls[data]).setValue('');
      this.addressForm.controls[data].setErrors(null);
    };
  };

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}