import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactProviderService } from '@core/providers/contacts/contact-provider.service';
import { HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { Contact } from '@models/contact.models';

@Component({
  selector: 'visitor-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  
  public isLoading: boolean;
  public contactForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private notificationService: NotificationService,
    private contactProvider: ContactProviderService,
    private helperService: HelperService
  ) {
    this.isLoading = false;
    this.contactForm = this.fb.group({
      fullName: [null, Validators.required],
      phone: [null, Validators.compose([
        Validators.required, Validators.minLength(9), Validators.maxLength(9)
      ])],
      message: [null, Validators.compose([
        Validators.required, Validators.minLength(1), Validators.maxLength(400)
      ])],
      email: [null, Validators.compose([
        Validators.required, Validators.email
      ])],
    });
  }

  get email(){
    return this.contactForm.get('email')?.value;
  };

  get phone(){
    return this.contactForm.get('phone')?.value;
  };

  get message(){
    return this.contactForm.get('message')?.value;
  };

  get fullName(){
    return this.contactForm.get('fullName')?.value;
  };

  async onSubmit(): Promise<any> {
    if (this.contactForm.valid){
      if (this.helperService.verifyMessage(this.message).verify) {
        if (this.helperService.verifyMail(this.email).verify){
          if (this.helperService.verifyName(this.fullName).verify){
            let contact: Contact = {
              fullName: this.fullName.trim(),
              phone: this.phone.trim(),
              email: this.email.trim(),
              message: this.message.trim()
            };
            try {
              this.isLoading = true;
              const result = await this.contactProvider.postContact(contact).toPromise();
              if (result) this.isLoading = false;
              this.notificationService.success('Su solicitud fue realizada, le notificaremos en cuanto podamos! ');
              this.cleanForm();
            } catch (e) {
              console.log(e);
              this.notificationService.error('No se pudo realizar tu solicitud, intente otra vez');
            }
          } else {
            return this.notificationService.error('Ingrese solo su nombre, sin caracteres especiales');
          };
        } else {
          return this.notificationService.error('¡Correo invalido, intente con otro correo!');
        };
      }
      else {
        return this.notificationService.error('¡El mensaje contiene caracteres invalidos!');
      };
    };
  };

  private cleanForm(){
    for(let data in this.contactForm.controls) {
      (<FormControl>this.contactForm.controls[data]).setValue('');
      this.contactForm.controls[data].setErrors(null);
    };
  };

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}