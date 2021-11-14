import { AdminHomeScreenComponent } from '@admin/screens/admin-home-screen/admin-home-screen.component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactProviderService } from '@core/providers/contacts/contact-provider.service';
import { HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { Contact } from '@models/contact.model';

@Component({
  selector: 'app-response-modal',
  templateUrl: './response-modal.component.html',
  styleUrls: ['./response-modal.component.sass']
})
export class ResponseModalComponent implements OnInit {

  public contact: Contact | null;
  public editContactForm: FormGroup;
  public isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ResponseModalComponent>,
    private notificationS: NotificationService,
    private contactP: ContactProviderService,
    private helper: HelperService,
    @Inject(MAT_DIALOG_DATA) public data: { contact: Contact, event: string }
  ) { 
    if (data.contact) this.contact = data.contact;
    else this.contact = null;
    this.isLoading = false;
    this.editContactForm = this.fb.group({
      name: [this.contact?.fullName],
      email: [this.contact?.email],
      phone: [this.contact?.phone],
      message: [this.contact?.message],
      response: [this.contact?.response? this.contact?.response : null, 
        Validators.compose([Validators.required, Validators.minLength(1),Validators.maxLength(400)])
      ]
    });
  }

  ngOnInit(): void {
  }

  public async updateContact(): Promise<void> {
    this.isLoading = true;
    if (this.editContactForm.valid) {
      try {
        let product: Partial<Contact> = {
          response: this.editContactForm.controls.response.value,
          isReaded: true,
          updatedAt: new Date()
        };
        const result: any = await this.contactP.updateContact(this.contact?._id!, product).toPromise();
        if (result) this.isLoading = false;
        this.helper.setEditedContacts(result.contact as Contact);
        this.notificationS.success('Ha respondido a la solicitud con éxito!');
        // implementar llamada a socket para que actualice el numero del admin... de la cantidad de solicitudes no respondidas
        this.editContactForm.controls.response.setValue(null);
        this.editContactForm.controls.response.setErrors(null);
        this.dialogRef.close();
      } catch (e) {
        console.log(e);
        this.notificationS.error('No pudimos enviar su respuesta, intente otra vez');
        this.isLoading = false;
        this.editContactForm.controls.response.setValue(null);
        this.editContactForm.controls.response.setErrors(null);
      }
    } else {
      this.notificationS.error('Algo ocurrió con el formulario, pruebe otra vez');
      this.isLoading = false;
    }
  };
}