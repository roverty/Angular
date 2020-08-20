import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../../products/services/cart.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product;

  constructor(
    private cart: CartService
  ) { }

  ngOnInit(): void {
    this.cart.getObservable().subscribe(response => {
    });
  }

  addProduct(): void {
    this.cart.addProduct(this.product);
  }
}
