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

  constructor(private fb: FormBuilder) {
    this.specialCharacters = [
      '"', "'", '&', '%', '?', '¿', '#', ',', '{', '}', '[', ']', '^', '`', 
      '´', '~', '¡', '!', "$", '/', '(', ")", '=', '¨', '°', '¬', '<', '>'
    ];
    this.contactForm = this.fb.group({
      fullName: [null, Validators.required],
      phone: [null, Validators.compose([
        Validators.required, Validators.minLength(9), Validators.maxLength(9)
      ])],
      message: [null, Validators.compose([
        Validators.required, Validators.minLength(1), Validators.maxLength(250)
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

  onSubmit(): void {
    if (this.contactForm.valid){
      if (this.verifyForm().verify) {
        // message validate, need to validate the other ones
      }
      else {
        // reject the request
      };
    };
  };

  private verifyForm(): {message: string, verify: boolean} {
    this.specialCharacters.forEach(car => {
      if (this.message.includes(car)) return {
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

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}