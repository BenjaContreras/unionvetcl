import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactProviderService } from '@core/providers/contacts/contact-provider.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { Contact } from '@models/contact.models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  public contact: Contact | null;
  public event: string;
  public editContactForm: FormGroup;
  public isLoading: boolean;

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private fb: FormBuilder,
    private notifications: NotificationService,
    private contactP: ContactProviderService,
    @Inject(MAT_DIALOG_DATA) data: { contact: any, type: string }
  ) { 
    if (data.contact) this.contact = data.contact;
    else this.contact = null;
    this.isLoading = false;
    this.event = data.type;
    this.editContactForm = this.fb.group({
      name: [this.contact?.fullName],
      phone: [this.contact?.phone],
      email: [this.contact?.email],
      message: [this.contact?.message, Validators.maxLength(400)],
      response: [this.contact?.response ? this.contact.response : null, Validators.maxLength(400)],
      isReaded: [this.contact?.isReaded]
    });
  }

  ngOnInit(): void {
  }

  public cleanForm(){
    for(let data in this.editContactForm.controls) {
      (<FormControl>this.editContactForm.controls[data]).setValue(null);
      this.editContactForm.controls[data].setErrors(null);
    };
  };

  public async updateContact() {
    this.isLoading = true;
    if (this.editContactForm.valid) {
      try {
        let contact: Partial<Contact> = {
          fullName: (this.editContactForm.value.name as string).trim(),
          phone: (this.editContactForm.value.phone as string).trim(),
          email: (this.editContactForm.value.email as string).trim(),
          message: (this.editContactForm.value.message as string).trim(),
          response: (this.editContactForm.value.response as string).trim(),
          isReaded: this.editContactForm.value.isReaded,
          updatedAt: new Date()
        };
        const result = await this.contactP.updateContact(this.contact?._id!, contact).toPromise();
        if (result) this.isLoading = false;
        this.notifications.success('Solicitud actualizada con éxito!');
        this.cleanForm();
        this.dialogRef.close();
      } catch (e) {
        console.log(e);
        this.notifications.error('No pudimos actualizar la solicitud, intente otra vez');
        this.isLoading = false;
        this.cleanForm();
      }
    } else {
      this.notifications.error('Algo ocurrió con el formulario, pruebe otra vez');
      this.isLoading = false;
      this.cleanForm();
    }
  };
}
