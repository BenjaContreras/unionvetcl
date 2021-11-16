import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
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

  public updateUserPets(UserId: string, petId: string): Observable<Partial<User>>{
    let partialUser: Partial<User> = {
      pets: [petId],
      updatedAt: new Date()
    };
    return this.httpService.put<User>(`/user/${UserId}`, partialUser);
  };

  public deleteUser(UserId: string): Observable<User>{
    return this.httpService.delete<User>(`/user/${UserId}`);
  };

  public postUser(body: any): Observable<User>{
    return this.httpService.post<User>(`/user`, body);
  };
}
