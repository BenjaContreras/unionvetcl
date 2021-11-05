import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecoverPasswordService {

  public token: string;

  constructor(private httpService: HttpService) { 
    this.token = '';
  }

  public recoverPassword(password: string): Observable<any> {
    return this.httpService.post('/api/auth/reset', [this.token, password]);
  };

  public sendLinkToEmail(email: string): Observable<any> {
    return this.httpService.post('/api/auth/recover', email);
  };

  public setToken(token: string) {
    this.token = token;
  };

  public getToken() {
    return this.token;
  };
}
