import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
import { Pet } from '@models/pet.models';
import { User } from '@models/user.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {

  constructor(private httpService: HttpService) { }

  public getAllUsers(): Observable<User[]> {
    return this.httpService.get<User[]>('/user');
  }

  public getUserById(UserId: string): Observable<User>{
    return this.httpService.get<User>(`/user/${UserId}`);
  };

  public updateUser(UserId: string, body: any): Observable<Partial<User>>{
    return this.httpService.put<User>(`/user/${UserId}`, body);
  };

  public updateUserPets(userId: string, petId: string, pets: Pet[]): Observable<Partial<User>>{
    let petsAux: string[] = pets.map(pet => pet._id!);
    petsAux.push(petId);
    let partialUser: Partial<User> = {
      pets: petsAux,
      updatedAt: new Date()
    };
    return this.httpService.put<User>(`/user/${userId}`, partialUser);
  };

  public deleteUser(UserId: string): Observable<User>{
    return this.httpService.delete<User>(`/user/${UserId}`);
  };

  public postUser(body: any): Observable<User>{
    return this.httpService.post<User>(`/user`, body);
  };
}
