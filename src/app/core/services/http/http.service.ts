import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";
import { TokenService } from '../token/token.service';

interface HttpOptions {
  headers: HttpHeaders
};
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpOptions: HttpOptions;
  private baseUrl: string;
  public token: string;

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
    this.baseUrl = environment.apiBaseUrl;
    this.token = this.tokenService.getToken();

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  public get<type>(path: string){
    return this.httpClient.get<type>(this.baseUrl + path, this.httpOptions)
      .pipe(
        map((data: any) => data as type)
      );
  }

  public post<type>(path: string, body: any) {
    return this.httpClient.post<type>(this.baseUrl + path, body, this.httpOptions);
  }

  public put<type>(path: string, body: any) {
    return this.httpClient.put<type>(this.baseUrl + path, body, this.httpOptions);
  }

  public delete<type>(path: string){
    return this.httpClient.delete<type>(this.baseUrl + path, this.httpOptions);
  }
}