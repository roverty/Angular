import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Product from '../models/product.model';
import { Observable } from 'rxjs';

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

  postProduct(product: Product, url: string): Observable<object> {
    const id = String(Math.floor(Math.random() * 500000));
    const myProduct = product;
    myProduct.img = url;
    myProduct.id = id;
    console.log(myProduct);
    return this.http.post(`${this.url}/postProduct`, myProduct);
  }

}
