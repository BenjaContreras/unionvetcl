import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
import { Appointment } from '@models/date.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatesProviderService {

  constructor(private httpService: HttpService) { }

  public getAllAppointments(): Observable<Appointment[]> {
    return this.httpService.get<Appointment[]>('/appointment');
  }

  public getAppointmentById(appointmentId: string): Observable<Appointment>{
    return this.httpService.get<Appointment>(`/appointment/${appointmentId}`);
  };

  public updateAppointment(appointmentId: string, body: any): Observable<Partial<Appointment>>{
    return this.httpService.put<Appointment>(`/appointment/${appointmentId}`, body);
  };

  public deleteAppointment(appointmentId: string): Observable<Appointment>{
    return this.httpService.delete<Appointment>(`/appointment/${appointmentId}`);
  };

  public postAppointment(body: any): Observable<Appointment>{
    return this.httpService.post<Appointment>(`/appointment`, body);
  };
}
