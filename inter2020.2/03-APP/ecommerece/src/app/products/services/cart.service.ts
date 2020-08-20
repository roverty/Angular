import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import Product from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Product[] = [];
  public addCart = new BehaviorSubject<Product>(null);

  constructor() { }

  getObservable(): Observable<Product> {
    return this.addCart.asObservable();
  }

  addProduct(product: Product): void {
    this.cart.push(product);
    console.log(this.cart);
    this.addCart.next(product);
  }

  getCart(): Product[] {
    return this.cart;
  }

}
