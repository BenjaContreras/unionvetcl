import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthProviderService } from '@core/providers/auth/auth-provider.service';
import { RecoverPasswordService } from '@core/providers/recover-password/recover-password.service';
import { TokenService } from '@core/services/token/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {

  private count: number;

  constructor(
    private recoverPasswordProvider: RecoverPasswordService,
    private router: Router,
    private tokenService: TokenService
  ) { 
    this.count = 0;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.count === 0) {
        if (route.params.token) {
          this.tokenService.addPasswordToken(route.params.token);
          this.recoverPasswordProvider.setToken(route.params.token);
          this.count++;
          return true;
        } else {
          this.router.navigate(['visitor/home']);
          return false;
        }
      } else {
        if (this.tokenService.getPasswordToken()) {
          this.count++;
          return true;
        } else {
          this.router.navigate(['visitor/home']);
          return false;
        }
      };
  }
}