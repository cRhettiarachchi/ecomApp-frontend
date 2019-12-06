import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../models/productModel';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductModel[] = [];
  private productSubject = new Subject<ProductModel[]>();
  private url = 'http://localhost:8080/products';
  constructor(private http: HttpClient) { }

  getAllProducts() {
    this.http.get<{message: string, products: {
        _id: string,
        name: string,
        category: string,
        price: number,
        imagePath: string,
        condition: string
      }[]}>(this.url)
      .pipe(map(productData => {
        return productData.products.map(product => {
          return{
            id: product._id,
            name: product.name,
            price: product.price,
            category: product.category,
            imagePath: product.imagePath,
            condition: product.condition
          };
        });
      }))
      .subscribe(products => {
      this.products = products;
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
