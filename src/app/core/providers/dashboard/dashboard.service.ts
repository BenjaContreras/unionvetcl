import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
import { Product } from '@models/product.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardProviderService {


  constructor(private httpService: HttpService) { }

  public getProductsOfDashboard(): Observable<Product[]> {
    return this.httpService.get<Product[]>('/dashboard/products');
  };
}
