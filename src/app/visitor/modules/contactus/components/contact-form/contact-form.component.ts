import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'visitor-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  
  public contactForm: FormGroup;
  private specialCharacters: string[];
  private validMails: string[];

  constructor(private fb: FormBuilder) {
    this.specialCharacters = [
      '"', "'", '&', '%', '?', '¿', '#', ',', '{', '}', '[', ']', '^', '`', 
      '´', '~', '¡', '!', "$", '/', '(', ")", '=', '¨', '°', '¬', '<', '>', 'script'
    ];
    this.validMails = [
      'gmail.com', 'outlook.com', 'hotmail.com', 'icloud.com', 'yahoo.es', 'yahoo.com', 'mail.pucv.cl', 'sansano.usm.cl', 'codefire.cl',
      'alumnos.uv.cl', 'uv.cl', 'pucv.cl', 'usm.cl', 'uai.cl', 'unab.cl'
    ];
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
      if (this.verifyMessage().verify) {
        if (this.verifyMail().verify){
          if (this.verifyName().verify){
            let contact: Contact = {
              fullName: this.fullName,
              phone: this.phone,
              email: this.email,
              message: this.message
            };
            try {
              await this.contactProvider.postContact(contact).toPromise();
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

  private verifyMessage(): {message: string, verify: boolean} {
    this.specialCharacters.forEach(car => {
      if (!this.message.includes(car)) return {
        message: 'El mensaje contiene caracteres invalidos',
        verify: false
      };
      return;
    });
    return {
      message: 'Todo en orden',
      verify: true 
    };
  };

  private verifyMail(): {message: string, verify: boolean} {
    this.validMails.forEach(mail => {
      if (!this.email.includes(mail)) return {
        message: 'El correo es invalido',
        verify: false
      };
      return;
    });
    return {
      message: 'Todo en orden',
      verify: true 
    };
  };

  private verifyName(): {message: string, verify: boolean} {
    this.specialCharacters.forEach(car => {
      if (!this.fullName.includes(car)) return {
        message: 'El nombre contiene caracteres invalidos',
        verify: false
      };
      return;
    });
    return {
      message: 'Todo en orden',
      verify: true 
    };
  };

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}