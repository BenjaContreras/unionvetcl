import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PublicationProviderService } from '@core/providers/publications/publication-provider.service';
import { HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { Publication } from '@models/publication.models';

@Component({
  selector: 'app-upload-publication',
  templateUrl: './upload-publication.component.html',
  styleUrls: ['./upload-publication.component.sass']
})
export class UploadPublicationComponent implements OnInit {

  public link: string;
  public description: string;
  public isLoading: boolean;

  constructor(
    private dialogRef: MatDialogRef<UploadPublicationComponent>,
    private notifications: NotificationService,
    private helper: HelperService,
    private rrss: PublicationProviderService,
  ) {
    this.link = '';
    this.description = '';
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

  public async uploadLink(): Promise<void> {
    this.isLoading = true;
    this.link.concat('/embed');
    if (this.link?.length){
      if (this.helper.verifyLink(this.link).verify){
        if (this.helper.verifyMessage(this.description).verify){
          let newPublication: Publication = {
            url: this.link, 
            description: this.description,
          };
          try {
            const result = await this.rrss.postPublication(newPublication).toPromise();
            if (result) this.isLoading = false;
            this.notifications.success('Publicación subida correctamente!');
            this.dialogRef.close();
            this.link = '';
            this.description = '';
          } catch (e) {
            console.log(e);
            this.isLoading = false;
            this.notifications.error('Error al subir el link, intente otra vez');
          }
        } else {
          this.isLoading = false;
          this.notifications.error('La descripción contiene caracteres inválidos');
        };
      } else {
        this.isLoading = false;
        this.notifications.error('Verifique bien el link, contiene caracteres invalidos');
      };
    };
  };
}
