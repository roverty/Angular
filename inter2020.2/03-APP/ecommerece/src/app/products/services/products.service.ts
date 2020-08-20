import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Product from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<object> {
    return this.http.get('https://us-central1-krishwait-3933a.cloudfunctions.net/api/getProducts');
  }

}
