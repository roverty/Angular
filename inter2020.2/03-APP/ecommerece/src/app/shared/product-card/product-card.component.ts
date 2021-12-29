import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../products/services/cart.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product;

  public addCart: boolean;

  constructor(
    private cart: CartService,
    private route: Router
  ) { }

  ngOnInit(): void {
    // if (this.route.url === '/cart') {
    //   this.addCart = false;
    // } else {
    //   this.addCart = true;
    // }

    this.route.url === '/cart' ? this.addCart = false : this.addCart = true;

  }

  addProduct(): void {
    this.cart.addProduct(this.product);
  }
}
