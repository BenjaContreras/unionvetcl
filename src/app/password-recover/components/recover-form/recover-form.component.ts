import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { RecoverPasswordService } from '@core/providers/recover-password/recover-password.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { PasswordRecoverResponse } from '@models/password.models';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent?.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  };
};

@Component({
  selector: 'app-recover-form',
  templateUrl: './recover-form.component.html',
  styleUrls: ['./recover-form.component.sass']
})
export class RecoverFormComponent {

  public isLoading: boolean;
  public hover: boolean;
  public addressForm: FormGroup;
  public matcher: MyErrorStateMatcher = new MyErrorStateMatcher();

  constructor(
    private fb: FormBuilder, 
    private notificationService: NotificationService,
    private recoverProvider: RecoverPasswordService
  ) {
    this.isLoading = false;
    this.hover = false;
    this.addressForm = this.fb.group({
      password: [null, 
        [Validators.required, Validators.minLength(8)]
      ],
      password2: [null, 
        [Validators.required, Validators.minLength(8)]
      ],
    }, { validator: this.passwordMatchValidator });
  }

  public async login() {
    const password: string = this.addressForm.get('password')?.value;
    const pass2: string = this.addressForm.get('password2')?.value;
    if (password === pass2) {
      try {
        if (this.addressForm.valid){
          this.isLoading = true;
          const result: PasswordRecoverResponse = await this.recoverProvider.recoverPassword(password).toPromise();
          if (result.status === 200) {
            this.notificationService.success('Contraseña reescrita con éxito!');
            this.isLoading = false;
          } else {
            this.notificationService.error('Algo ha sucedido');
            this.isLoading = false;
            throw new Error("Problema al setear la nueva contraseña");
          };
        };
      } catch (e) {
        console.log(e);
        this.notificationService.error('No pudimos restaurar su contraseña, intente otra vez');
        this.cleanForm();
        this.isLoading = false;
      };
    } else {
      this.notificationService.error('Las contraseñas no coinciden');
      this.cleanForm();
    };
  };

  private cleanForm(){
    for(let data in this.addressForm.controls) {
      (<FormControl>this.addressForm.controls[data]).setValue('');
      this.addressForm.controls[data].setErrors(null);
    };
  };

  public goTo(route: string){
    //
  };

  private passwordMatchValidator(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.password2.value;
    return pass === confirmPass ? null : { notSame: true }
  };
}