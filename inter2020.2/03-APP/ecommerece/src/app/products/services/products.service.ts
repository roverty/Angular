import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Product from '../models/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products: Product[] = [];
  private url = 'https://us-central1-krishwait-3933a.cloudfunctions.net/api';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<object> {
    return this.http.get(`${this.url}/getProducts`);
  }

  getProduct(id): Observable<object> {
    return this.http.get(`${this.url}/getProduct?idProduct=${id}`);
  }
}
