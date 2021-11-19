import { Injectable } from '@angular/core';
import { Publication } from '@models/publication.models';
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

  public updatePublication(publicationId: string, body: any): Observable<Partial<Publication>>{
    return this.httpService.put<Publication>(`/publication/${publicationId}`, body);
  };

  public deletePublication(publicationId: string): Observable<Publication>{
    return this.httpService.delete<Publication>(`/publication/${publicationId}`);
  };

  public postPublication(body: any): Observable<Publication>{
    return this.httpService.post<Publication>(`/publication`, body);
  };
}
