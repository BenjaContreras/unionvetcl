import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProviderService } from '@core/providers/auth/auth-provider.service';
import { NotificationService } from '@core/services/notification/notification.service';

@Component({
  selector: 'admin-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  public isLoading: boolean;
  public hover: boolean;
  public addressForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private notificationService: NotificationService,
    private authProvider: AuthProviderService
  ) {
    this.isLoading = false;
    this.hover = false;
    this.addressForm = this.fb.group({
      email: [null, 
        [Validators.required, Validators.email]
      ],
      password: [null, Validators.required],
    });
  }

  public async login() {
    const email: string = this.addressForm.get('email')?.value;
    const pass: string = this.addressForm.get('password')?.value;
    try {
      if (this.addressForm.valid){
        this.isLoading = true;
        const result = await this.authProvider.login(email, pass, 'admin').toPromise();
        if (result?.access_token){
          this.notificationService.success('Sesión iniciada con éxtio!');
          this.isLoading = false;
        } else {
          this.notificationService.error('Algo ha sucedido');
          throw new Error("Problema al iniciar sesión");
          
        }
      }
    } catch (e) {
      console.log(e);
      this.notificationService.error('Verifique sus datos, no pudimos iniciarle sesión');
    };
  };

  public goTo(route: string){
    //
  };
}
