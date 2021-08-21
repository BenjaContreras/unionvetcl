import { Injectable } from '@angular/core';
import { Appointment } from '@core/models/appointment.model';
import { HttpService } from '@core/services/http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateProviderService {

  constructor(private httpService: HttpService) { }

  public getAllAppointments(): Observable<Appointment[]> {
    return this.httpService.get<Appointment[]>('/appointment');
  }

  public getAppointmentById(appointmentId: string): Observable<Appointment>{
    return this.httpService.get<Appointment>(`/appointment/${appointmentId}`);
  };

  public updateAppointment(appoinmentId: string, body: any): Observable<Partial<Appointment>>{
    return this.httpService.put<Appointment>(`/appointment/${appoinmentId}`, body);
  };

  public deleteAppointment(appoinmentId: string): Observable<Appointment>{
    return this.httpService.delete<Appointment>(`/appointment/${appoinmentId}`);
  };

  public postAppointment(body: any): Observable<Appointment>{
    return this.httpService.post<Appointment>(`/appointment`, body);
  };
}
