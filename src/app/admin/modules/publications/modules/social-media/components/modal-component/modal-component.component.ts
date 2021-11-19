import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PublicationProviderService } from '@core/providers/publications/publication-provider.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { Publication } from '@models/publication.models';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.sass']
})
export class ModalComponentComponent implements OnInit {

  public publication: Publication | null;
  public event: string;
  public editPublicationForm: FormGroup;
  public isLoading: boolean;

  constructor(
    private dialogRef: MatDialogRef<ModalComponentComponent>,
    private fb: FormBuilder,
    private notificationS: NotificationService,
    private publicationP: PublicationProviderService,
    @Inject(MAT_DIALOG_DATA) data: { publication: Publication, type: string }
  ) { 
    if (data.publication) this.publication = data.publication;
    else this.publication = null;
    this.isLoading = false;
    this.event = data.type;
    this.editPublicationForm = this.fb.group({
      url: [this.publication?.url],
    });
  }

  ngOnInit(): void {
  }

  public cleanForm(){
    for(let data in this.editPublicationForm.controls) {
      (<FormControl>this.editPublicationForm.controls[data]).setValue(null);
      this.editPublicationForm.controls[data].setErrors(null);
    };
  };

  public async updatePublication() {
    this.isLoading = true;
    if (this.editPublicationForm.valid) {
      try {
        let publication: Partial<Publication> = {
          url: this.editPublicationForm.value.url as string,
          updatedAt: new Date()
        };
        const result = await this.publicationP.updatePublication(this.publication?._id!, publication).toPromise();
        if (result) this.isLoading = false;
        this.notificationS.success('Publicación actualizada con éxito!');
        this.cleanForm();
        this.dialogRef.close();
      } catch (e) {
        console.log(e);
        this.notificationS.error('No pudimos actualizar el publicación, intente otra vez');
        this.isLoading = false;
      }
    } else {
      this.notificationS.error('Algo ocurrió con el formulario, pruebe otra vez');
      this.isLoading = false;
    }
  };

  public async deletePublication() {
    this.isLoading = true;
    try {
      const result = await this.publicationP.deletePublication(this.publication?._id!).toPromise();
      if (result) this.isLoading = false;
      this.notificationS.success('Publicación actualizado con éxito!');
      this.cleanForm();
      this.dialogRef.close();
    } catch (e) {
      console.log(e);
      this.notificationS.error('No pudimos actualizar la publicación, intente otra vez');
      this.isLoading = false;
    }
  };
}
