import { Component, OnInit } from '@angular/core';
import {Form} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;
  confirmHide = true;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: Form) {
    console.log(form);
  }

}
