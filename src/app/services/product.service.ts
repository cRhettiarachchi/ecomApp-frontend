import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../models/productModel';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductModel[] = [];
  private productSubject = new Subject<ProductModel[]>();

  constructor(private http: HttpClient) { }

  getAllProducts() {
    this.http.get<{message: string, products: ProductModel[]}>('http://localhost:8080/products').subscribe(result => {
      this.products = result.products;
      this.productSubject.next([...this.products]);
    });
  }

  getProductsSubject(): Observable<ProductModel[]> {
    return this.productSubject;
  }
}
