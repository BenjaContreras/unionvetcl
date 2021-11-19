import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
import { Service } from '@models/service.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrviceService {

  constructor(private httpService: HttpService) { }

  public getAllServices(): Observable<Service[]> {
    return this.httpService.get<Service[]>('/service');
  }

  public getServiceById(serviceId: string): Observable<Service>{
    return this.httpService.get<Service>(`/service/${serviceId}`);
  };

  public updateService(serviceId: string, body: any): Observable<Partial<Service>>{
    return this.httpService.put<Service>(`/service/${serviceId}`, body);
  };

  public deleteService(serviceId: string): Observable<Service>{
    return this.httpService.delete<Service>(`/service/${serviceId}`);
  };

  public postService(body: any): Observable<Service>{
    return this.httpService.post<Service>(`/service`, body);
  };
}
