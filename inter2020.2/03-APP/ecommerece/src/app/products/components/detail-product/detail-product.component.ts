import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsService } from '../../services/products.service';
import Product from '../../models/product.model';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  public product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productsService.getProduct(params.id).subscribe((response: Product) => {
        // console.log(response);
        this.product = response;
      },
      error => {
        console.log('Whoops something went wrong');
        this.router.navigateByUrl('/notFound');
      });
    });
  }

}
