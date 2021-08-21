import { Injectable } from '@angular/core';
import { Contact } from '@core/models/contact.models';
import { HttpService } from '@core/services/http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactProviderService {

  constructor(private httpService: HttpService) { }

  public getAllContacts(): Observable<Contact[]> {
    return this.httpService.get<Contact[]>('/contact');
  }

  public getContactById(contactId: string): Observable<Contact>{
    return this.httpService.get<Contact>(`/contact/${contactId}`);
  };

  public updateContact(contactId: string, body: any): Observable<Partial<Contact>>{
    return this.httpService.put<Contact>(`/contact/${contactId}`, body);
  };

  public deleteContact(contactId: string): Observable<Contact>{
    return this.httpService.delete<Contact>(`/contact/${contactId}`);
  };

  public postContact(body: any): Observable<Contact>{
    return this.httpService.post<Contact>(`/contact`, body);
  };
}