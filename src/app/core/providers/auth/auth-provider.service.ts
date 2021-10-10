import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpService } from '@core/services/http/http.service';
import { TokenService } from '@core/services/token/token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthProviderService {

  private authenticatedAdmin: boolean;
  private authenticatedPatient: boolean;
  private currentUser: any;

  constructor(
    private httpService: HttpService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.authenticatedAdmin = false;
    this.authenticatedPatient = false;
    this.currentUser = null;

    if (this.tokenService.getRole() === 'admin') {
      this.authenticatedAdmin = true;
    };
    if (this.tokenService.getRole() === 'user') {
      this.authenticatedPatient = true;
    };
  }

  isAuthenticated(ruta: string): boolean {
    if (ruta.trim() === 'admin') { //Admin
      return this.authenticatedAdmin;
    } else {
      if (ruta.trim() === 'user') { //Pacient
        return this.authenticatedPatient;
      };
    };
    return false;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  login(auth: { email: string, password: string }, opcion: number): Observable<any> {
    if (opcion == 1) {
      return this.httpService.post('/auth/login/user', {
        email: auth.email,
        password: auth.password
      })
        .pipe(
          tap((data: any) => {
            if ((data.user.role === 'user')) {
              const token: string = data.access_token;
              this.currentUser = {
                _id: data.user._id,
                role: data.user.role,
                firstName: data.user.firstName,
                lastName: data.user.lastName,
                mail: data.user.mail,
                phone: data.user.phone,
                lastConection: data.user.lastConection
              };
              this.tokenService.addRole(this.currentUser.role);
              this.tokenService.addToken(token);
              this.authenticatedPatient = true;
                this.authenticatedAdmin = false;
              this.router.navigate(['']);
            } else {
              throw (this.router.navigate(['visitor/inicio']));
            }
          })
        );
    } else {
      return this.httpService.post('/auth/login/admin', {
        email: auth.email,
        password: auth.password
      })
        .pipe(
          tap((data: any) => {
            if ((data.user.role === 'admin')) {
              const token: string = data.access_token;
              this.currentUser = {
                _id: data.user._id,
                role: data.user.role,
                firstName: data.user.firstName,
                lastName: data.user.lastName,
                mail: data.user.mail,
                phone: data.user.phone,
                lastConection: data.user.lastConection
              };
              this.tokenService.addRole(this.currentUser.role);
              this.tokenService.addToken(token);
                this.authenticatedPatient = false;
              this.authenticatedAdmin = false;
              this.router.navigate(['']);
            } else {
              throw (this.router.navigate(['visitor/inicio']));
            }
          })
        );
    }
  }

  public logout(): void{
    this.currentUser = null;
    this.authenticatedPatient = false;
    this.authenticatedAdmin = false;
    sessionStorage.removeItem('credentials');
    this.router.navigate(['visitor/home']);
  }

}