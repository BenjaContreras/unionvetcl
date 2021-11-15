import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PublicationProviderService } from '@core/providers/publications/publication-provider.service';
import { HelperService } from '@core/services/helper/helper.service';
import { NotificationService } from '@core/services/notification/notification.service';

@Component({
  selector: 'app-upload-publication',
  templateUrl: './upload-publication.component.html',
  styleUrls: ['./upload-publication.component.sass']
})
export class UploadPublicationComponent implements OnInit {

  public link: string;
  public isLoading: boolean;

  constructor(
    private dialogRef: MatDialogRef<UploadPublicationComponent>,
    private notifications: NotificationService,
    private helper: HelperService,
    private rrss: PublicationProviderService
  ) {
    this.link = '';
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

  public async uploadLink(): Promise<void> {
    this.isLoading = true;
    this.link.concat('/embed');
    if (this.link?.length){
      if (this.helper.verifyLink(this.link).verify){
        try {
          const result = await this.rrss.postPublication(this.link).toPromise();
          if (result) this.isLoading = false;
          this.notifications.success('Publicación subida correctamente!');
          this.dialogRef.close();
          this.link = '';
        } catch (e) {
          console.log(e);
          this.isLoading = false;
          this.notifications.error('Error al subir el link, intente otra vez');
        }
      } else this.notifications.error('Verifique bien el link, contiene caracteres invalidos');
    };
  };
}
