import {Component, OnInit} from '@angular/core';
import {ProductService} from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecomApp';
  isLoading = true;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getLoadingSubject().subscribe(value => {
      this.isLoading = value;
      console.log('the value is ' + value);
    });
  }
}
