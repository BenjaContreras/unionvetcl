import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
import { Tip } from '@models/tip.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipProviderService {

  constructor(private httpService: HttpService) { }

  public getAllTips(): Observable<Tip[]> {
    return this.httpService.get<Tip[]>('/tip');
  }

  public getTipById(tipId: string): Observable<Tip>{
    return this.httpService.get<Tip>(`/tip/${tipId}`);
  };

  public updateTip(tipId: string, body: any): Observable<Partial<Tip>>{
    return this.httpService.put<Tip>(`/tip/${tipId}`, body);
  };

  public deleteTip(tipId: string): Observable<Tip>{
    return this.httpService.delete<Tip>(`/tip/${tipId}`);
  };

  public postTip(body: any): Observable<Tip>{
    return this.httpService.post<Tip>(`/tip`, body);
  };
}
