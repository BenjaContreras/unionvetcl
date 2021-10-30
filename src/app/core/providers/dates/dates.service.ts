import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatesProviderService {

  constructor(private httpService: HttpService) { }

  // public getAllDates(): Observable<Date[]> {
  //   return this.httpService.get<Date[]>('/dates');
  // };

  // public getDateById(id: string): Observable<Date> {
  //   return this.httpService.get<Date>(`/dates/${id}`);
  // };

  // public postDate(date: any): Observable<Date> {
  //   return this.httpService.post<Date>('/dates', date);
  // };
}
