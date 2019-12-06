import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../models/productModel';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: ProductModel[];
  constructor() { }

  ngOnInit() {
    this.products = [{
      id: '100d',
      name: 'name1',
      price: 20000,
      imagePath: '/assets/image-assets/headphone.jpg',
      category: 'electronics',
      condition: 'new'
    },
      {
        id: '100d',
        name: 'name1',
        price: 20000,
        imagePath: '/assets/image-assets/headphone.jpg',
        category: 'electronics',
        condition: 'new'
      },
      {
        id: '100d',
        name: 'name1',
        price: 20000,
        imagePath: '/assets/image-assets/headphone.jpg',
        category: 'electronics',
        condition: 'new'
      },
      {
        id: '100d',
        name: 'name1',
        price: 20000,
        imagePath: '/assets/image-assets/headphone.jpg',
        category: 'electronics',
        condition: 'new'
      },
    ];
  }

}
