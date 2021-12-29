import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

import Product from '../../models/product.model';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  public products: Product[] = [];
  public titleHeader: string;
  public titleSubheader: string;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    console.log(this.router.url);

    if (this.router.url === '/cart') {
      this.products = this.cartService.getCart();
      this.titleHeader = 'Carrito de compras';
      this.titleSubheader = 'Tu carrito está vacío';
    } else {
      this.productsService.getProducts().subscribe( (response: Product[]) => {
        this.products = response;
      });
      this.titleHeader = 'Productos';
      this.titleSubheader = 'Loading...';
    }
  }
}
