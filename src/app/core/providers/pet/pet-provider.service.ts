import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
import { Pet } from '@models/pet.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetProviderService {

  constructor(private httpService: HttpService) { }

  public getAllPets(): Observable<Pet[]> {
    return this.httpService.get<Pet[]>('/pet');
  }

  public getPetById(PetId: string): Observable<Pet>{
    return this.httpService.get<Pet>(`/pet/${PetId}`);
  };

  public updatePet(PetId: string, body: any): Observable<Partial<Pet>>{
    return this.httpService.put<Pet>(`/pet/${PetId}`, body);
  };

  public deletePet(PetId: string): Observable<Pet>{
    return this.httpService.delete<Pet>(`/pet/${PetId}`);
  };

  public postPet(body: any): Observable<Pet>{
    return this.httpService.post<Pet>(`/pet`, body);
  };
}
