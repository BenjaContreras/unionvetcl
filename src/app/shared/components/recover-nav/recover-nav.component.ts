import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';

@Component({
  selector: 'recover-nav',
  templateUrl: './recover-nav.component.html',
  styleUrls: ['./recover-nav.component.sass']
})
export class RecoverNavComponent implements OnInit {

  public email: string;

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {
    this.email = '';
  }

  ngOnInit(): void {
  }

  public getCurrentRoute(): number | void {
    let url = this.router.url;
    if (url.includes('olvide-contrasenia')) return 1;
    if (url.includes('recuperar-clave')) return 2;
  };

  public openAlertModal(event: string): void {
    if (event === 'recuperacion'){
      this.dialog.open(AlertModalComponent, {
        width: '700px',
        height: '350px',
        data: {
          title: '¡Cuidado!',
          message: 'Si es que continua, no podrá volver atras',
          buttonText: ['Continuar', 'Cerrar']
        }
      });
    };
    if (event === 'olvido'){
      this.dialog.open(AlertModalComponent, {
        width: '700px',
        height: '350px',
        data: {
          title: '¡Cuidado!',
          message: 'Si es que continua, se perderá su progreso',
          buttonText: ['Continuar', 'Cerrar']
        }
      });
    };
  };

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}
