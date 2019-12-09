import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

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

  onSubmit(form: NgForm) {
    if (!form) {
      return;
    }
    console.log(form.value.date);
  }

}
