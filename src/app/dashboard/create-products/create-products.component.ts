import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {

  form: FormGroup;
  imagePreview: string | ArrayBuffer;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      price: new FormControl(null, {validators: [Validators.required]}),
      category: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      condition: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  onSavePost(formGroup: FormGroupDirective) {
    if (this.form.invalid) {
      return;
    }
    this.productService.createProduct(this.form.value.name,
      this.form.value.price,
      this.form.value.category,
      this.form.value.condition,
      this.form.value.image);
    this.form.reset();
    formGroup.resetForm();
    this.imagePreview = null;
  }
  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

}
