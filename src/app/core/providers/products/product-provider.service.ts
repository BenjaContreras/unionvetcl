import { Injectable } from '@angular/core';
import { Product } from '@models/product.models';
import { HttpService } from '@core/services/http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductProviderService {

  constructor(private httpService: HttpService) { }

  public getAllProducts(): Observable<Product[]> {
    return this.httpService.get<Product[]>('/product');
  }

  public getProductById(productId: string): Observable<Product>{
    return this.httpService.get<Product>(`/product/${productId}`);
  };

  public updateProduct(productId: string, body: any): Observable<Partial<Product>>{
    return this.httpService.put<Product>(`/product/${productId}`, body);
  };

  public deleteProduct(productId: string): Observable<Product>{
    return this.httpService.delete<Product>(`/product/${productId}`);
  };

  public postProduct(body: any): Observable<Product>{
    return this.httpService.post<Product>(`/product`, body);
  };
}
