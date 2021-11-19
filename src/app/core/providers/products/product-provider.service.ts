import { Injectable } from '@angular/core';
import { Product } from '@models/product.models';
import { HttpService } from '@core/services/http/http.service';
import { Observable } from 'rxjs';

export interface PaginateResponse {
  products: Product[],
  total: number,
  totalPages: number
};

@Injectable({
  providedIn: 'root'
})
export class ProductProviderService {

  constructor(private httpService: HttpService) { }

  public getAllProducts(): Observable<Product[]> {
    return this.httpService.get<Product[]>('/product');
  }

  /**
   * 
   * @param productsLimit Cantidad máxima de productos a mostrar
   * @param pageNumber Numero de página a mostrar
   * @returns Retorna una promesa con la cantidad de páginas totales a mostrar, con el total de productos y la lista de productos
   */
  public getAllProductsPaginated(productsLimit: number, pageNumber: number): Observable<PaginateResponse> {
    return this.httpService.get<PaginateResponse>(`/product/paginate/?limit=${productsLimit}&offset=${pageNumber}`);
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
