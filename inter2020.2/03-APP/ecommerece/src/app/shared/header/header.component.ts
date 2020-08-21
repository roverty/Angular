import { Component, OnInit } from '@angular/core';

import { CartService } from '../../products/services/cart.service';
import { AuthService } from '../../administrator/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showMenu = false;
  public countProducts: number;
  public animation: boolean;

  constructor(
    private cartService: CartService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.cartService.getObservable().subscribe(response => {
        // console.log(response);
        this.countProducts = this.cartService.getCart().length;
        this.animation = true;
        setTimeout(() => {
          this.animation = false;
        }, 800);
    });
  }

}
