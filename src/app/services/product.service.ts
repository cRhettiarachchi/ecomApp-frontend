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
  private url = 'http://localhost:8080/products';
  constructor(private http: HttpClient) { }

  getAllProducts() {
    this.http.get<{message: string, products: any[]}>(this.url)
      .pipe()
      .subscribe(result => {
      this.products = result.products;
      this.productSubject.next([...this.products]);
    });
  }

  getProductsSubject(): Observable<ProductModel[]> {
    return this.productSubject;
  }

  createProduct(name: string, price: number, category: string, condition: string, image: File) {
    const product = new FormData();
    product.append('name', name);
    product.append('price', ((price as unknown) as string));
    product.append('category', category);
    product.append('condition', condition);
    product.append('image', image, name);
    this.http.post(this.url, product).subscribe(result => {
      console.log('post success');
    });
  }
}
