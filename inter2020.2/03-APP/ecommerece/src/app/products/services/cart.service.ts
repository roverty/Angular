import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import Product from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Product[] = [];
  public addCart = new BehaviorSubject<Product>(null);

  constructor() {
    this.loadCart();
   }

  getObservable(): Observable<Product> {
    return this.addCart.asObservable();
  }

  addProduct(product: Product): void {
    this.cart.push(product);
    console.log(this.cart);

    const cartString = JSON.stringify(this.cart);

    localStorage.setItem('products', cartString);

    this.addCart.next(product);
  }

  getCart(): Product[] {
    return this.cart;
  }

  loadCart(): void {
    const cartArray = JSON.parse(localStorage.getItem('products'));
    // tslint:disable-next-line: no-unused-expression
    cartArray && (this.cart = cartArray);
  }
}
