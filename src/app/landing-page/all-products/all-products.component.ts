import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../models/productModel';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: ProductModel[];
  isLoading = true;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts();
    this.productService.getProductsSubject().subscribe((data) => {
      this.products = data;
      this.isLoading = false;
    });
  }

}
