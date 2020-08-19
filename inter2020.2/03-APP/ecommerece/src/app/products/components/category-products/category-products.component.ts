import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

  public products = [
    {
      title: 'Sudadera',
      price: 100,
      description: 'This are very chidos shoes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto',
      img: 'assets/img/sweter.png'
    },
    {
      title: 'Balon',
      price: 100,
      description: 'This are very chidos shoes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto',
      img: 'assets/img/ball.png'
    },
    {
      title: 'Gorra',
      price: 100,
      description: 'This are very chidos shoes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto',
      img: 'assets/img/cap.png'
    },
    {
      title: 'Tenis',
      price: 100,
      description: 'This are very chidos shoes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, architecto',
      img: 'assets/img/nike.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
