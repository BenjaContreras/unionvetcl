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
    let sendNewPassword: any = {
      password: password,
      token: this.token
    };
    return this.httpService.post<{token: string, password: string}>('/auth/reset', sendNewPassword);
  };

  public sendLinkToEmail(email: string): Observable<any> {
    return this.httpService.post<{email: string}>('/auth/recover', email);
  };

  public setToken(token: string) {
    this.token = token;
  };

  public getToken() {
    return this.token;
  };
}
