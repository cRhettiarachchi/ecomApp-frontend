import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  form: FormGroup;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      price: new FormControl(null, {validators: [Validators.required]}),
      category: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      condition: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    this.productService.createProduct(this.form.value.name, this.form.value.price, this.form.value.category, this.form.value.condition);
  }

}
