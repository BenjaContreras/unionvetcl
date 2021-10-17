import { Injectable } from '@angular/core';
import { Publication } from '@core/models/publication.model';
import { HttpService } from '@core/services/http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationProviderService {

  constructor(private httpService: HttpService) { }

  public getAllPublications(): Observable<Publication[]> {
    return this.httpService.get<Publication[]>('/publication');
  }

  public getPublicationById(publicationId: string): Observable<Publication>{
    return this.httpService.get<Publication>(`/publication/${publicationId}`);
  };

  public updatePublication(appoinmentId: string, body: any): Observable<Partial<Publication>>{
    return this.httpService.put<Publication>(`/publication/${appoinmentId}`, body);
  };

  public deletePublication(appoinmentId: string): Observable<Publication>{
    return this.httpService.delete<Publication>(`/publication/${appoinmentId}`);
  };

  public postPublication(body: any): Observable<Publication>{
    return this.httpService.post<Publication>(`/publication`, body);
  };
}
