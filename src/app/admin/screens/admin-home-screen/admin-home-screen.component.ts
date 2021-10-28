import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Router } from '@angular/router';
import { AuthProviderService } from '@core/providers/auth/auth-provider.service';
import { ContactProviderService } from '@core/providers/contacts/contact-provider.service';
import { DatesProviderService } from '@core/providers/dates/dates.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { Contact } from '@models/contact.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-home-screen',
  templateUrl: './admin-home-screen.component.html',
  styleUrls: ['./admin-home-screen.component.sass']
})
export class AdminHomeScreenComponent implements OnInit {

  public options: { name: string, subcategories: string[] }[];
  public lengthContact: number;
  public lengthDates: number;
  public optionSelected: string;

  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  @ViewChild('buttonNav')
  buttonNav: ElementRef = new ElementRef('buttonNav');

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authProvider: AuthProviderService,
    private router: Router,
    private notificationService: NotificationService,
    private contactProvider: ContactProviderService,
    private dateProvider: DatesProviderService
  ) {
    this.lengthContact = 0;
    this.lengthDates = 0;
    this.optionSelected = this.getCurrentRoute();
    this.options = [
      { name: 'Resumen', subcategories: [] },
      { name: 'Agenda', subcategories: ['Crear cita', 'Lista de citas']}, 
      { name: 'Usuarios', subcategories: ['Crear usuario', 'Verificar usuario', 'Lista de usuarios']}, 
      { name: 'Productos', subcategories: ['Actualizar productos', 'Actualizar precios', 'Lista de productos']}, 
      { name: 'Consultas', subcategories: ['Responder consulta', 'Lista de consultas']}, 
      { name: 'Publicaciones', subcategories: ['Crear publicación', 'Lista de tips', 'Lista de posts']}, 
      { name: 'Contratos', subcategories: []}
    ];
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  };

  async ngOnInit(): Promise<void> {
    this.lengthContact = await this.getLengthOfContacts();
    this.lengthDates = await this.getLengthOfDates();
  }

  public getCurrentRoute(): string {
    const route = this.router.url;
    if (route === '/admin/agenda') return this.optionSelected = 'Agenda';
    if (route === '/admin/') return this.optionSelected = 'Resumen';
    if (route === '/admin/publicaciones') return this.optionSelected = 'Publicaciones';
    if (route === '/admin/usuarios') return this.optionSelected = 'Usuarios';
    if (route === '/admin/productos') return this.optionSelected = 'Productos';
    if (route === '/admin/consultas') return this.optionSelected = 'Consultas';
    if (route === '/admin/contratos') return this.optionSelected = 'Contratos';
    return 'Resumen';
  };

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

  public async getLengthOfDates(): Promise<number>{
    let length = 0;
    // const result = await this.dateProvider.getAllDates().toPromise();
    // if (result) length = result.length;
    return length;
  };

  public async getLengthOfContacts(): Promise<number> {
    let length = 0;
    const resutl = await this.contactProvider.getAllContacts().toPromise();
    if (resutl) length = resutl.length;
    return length;
  };

  public logOut(): void {
    this.authProvider.logout();
  };

  public goTo(route: string | null, subcategory?: string): any {
    if (route) {
      if (this.authProvider.isAuthenticated('admin')) {
        if (route === 'Contratos'){
          this.router.navigate(['/admin/']);
          return;
        };
        if (route.toLowerCase() === 'resumen') {
          this.router.navigate(['admin/']);
          return;
        }
        if (subcategory) {
          if (route === subcategory) {
            this.handleException(route);
            return;
          };
        };
        this.router.navigate([`admin/${route.toLowerCase()}`]);
      } else return this.notificationService.error('No puede ingresar a esa ruta');
    } else return this.notificationService.error('No existe dicha ruta');
  };

  private handleException(route: string): void {
    if (route === 'Crear cita') {
      this.router.navigate(['admin/agenda/crear-cita']);
    } else if (route === 'Lista de citas') {
      this.router.navigate(['admin/agenda/lista-citas']);
    } else if (route === 'Crear usuario') {
      this.router.navigate(['admin/usuarios/crear-usuario']);
    } else if (route === 'Verificar usuario') {
      this.router.navigate(['admin/usuarios/verificar-usuario']);
    } else if (route === 'Lista de usuarios') {
      this.router.navigate(['admin/usuarios/lista-usuarios']);
    } else if (route === 'Actualizar productos') {
      this.router.navigate(['admin/productos/actualizar-productos']);
    } else if (route === 'Actualizar precios') {
      this.router.navigate(['admin/productos/actualizar-precios']);
    } else if (route === 'Lista de productos') {
      this.router.navigate(['admin/productos/lista-productos']);
    } else if (route === 'Responder consulta') {
      this.router.navigate(['admin/consultas/responder-consulta']);
    } else if (route === 'Lista de consultas') {
      this.router.navigate(['admin/consultas/lista-consultas']);
    } else if (route === 'Crear publicación') {
      this.router.navigate(['admin/publicaciones/crear-publicacion']);
    } else if (route === 'Lista de tips') {
      this.router.navigate(['admin/publicaciones/tips/lista-tips']);
    } else if (route === 'Lista de posts') {
      this.router.navigate(['admin/publicaciones/redes-sociales/lista-posts']);
    } else if (route === 'Crear oferta') {
      this.router.navigate(['admin/ofertas/crear-oferta']);
    } else if (route === 'Lista de ofertas') {
      this.router.navigate(['admin/ofertas/lista-ofertas']);
    } else if (route === 'Crear contrato') {
      this.router.navigate(['admin/contratos/crear-contrato']);
    } else if (route === 'Lista de contratos') {
      this.router.navigate(['admin/contratos/lista-contratos']);
    };
  };
}
