import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HelperService } from '@core/services/helper/helper.service';
import { UploadPublicationComponent } from '../upload-publication/upload-publication.component';

@Component({
  selector: 'app-redirect-component',
  templateUrl: './redirect-component.component.html',
  styleUrls: ['./redirect-component.component.sass']
})
export class RedirectComponentComponent implements OnInit {

  public categories: string[];

  constructor(
    private router: Router,
    private helperService: HelperService,
    private dialog: MatDialog
  ) {
    this.categories = ['Lista de publicaciones', 'Subir publicación'];
  }

  ngOnInit(): void {
  }

  public goTo(url: string): void {
    if (url === 'Subir publicación'){
      this.dialog.open(UploadPublicationComponent, {
        width: '600px',
      });
    } else this.router.navigate([`admin/${this.helperService.hendleRoutes(url)}`]);
  };
}