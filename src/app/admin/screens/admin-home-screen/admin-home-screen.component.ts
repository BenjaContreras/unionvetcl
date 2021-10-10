import { NotificationService } from './../../../core/services/notification/notification.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Router } from '@angular/router';
import { AuthProviderService } from '@core/providers/auth/auth-provider.service';

@Component({
  selector: 'app-admin-home-screen',
  templateUrl: './admin-home-screen.component.html',
  styleUrls: ['./admin-home-screen.component.sass']
})
export class AdminHomeScreenComponent implements OnInit, OnChanges {

  public options: string[];
  public optionSelected: string | null;

  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  @ViewChild('buttonNav')
  buttonNav: ElementRef = new ElementRef('buttonNav');

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authProvider: AuthProviderService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.optionSelected = null;
    this.options = ['Resumen', 'Agenda', 'Usuarios', 'Productos', 'Consultas', 'Ofertas', 'Publicaciones', 'Contratos']
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  public changeValue(event: MatSelectionListChange) {
    if (event) this.optionSelected = event.options[0].value;
  };

  public getIcon(value: string): string {
    switch (value) {
      case 'Resumen':
        return 'leaderboard';
      case 'Agenda':
        return 'book';
      case 'Usuarios':
        return 'person';
      case 'Productos':
        return 'shopping_bag';
      case 'Consultas':
        return 'help';
      case 'Ofertas':
        return 'add_alert';
      case 'Publicaciones':
        return 'dynamic_feed';
      case 'Contratos':
        return 'article';
      default:
        return '';
    };
  };

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  public logOut(): void {
    this.authProvider.logout();
  };

  public goTo(route: string | null) {
    if (route) {
      if (route.toLowerCase() === 'resumen') {
        this.router.navigate(['admin/']);
        return;
      }
      this.router.navigate([`admin/${route.toLowerCase()}`]);
    // if (this.authProvider.isAuthenticated('admin')) {
    //   this.router.navigate([`admin/${route}`]);
    // } else this.notificationService.error('No puede ingresar a esa ruta');
    } else this.notificationService.error('No existe dicha ruta');
  };
}
