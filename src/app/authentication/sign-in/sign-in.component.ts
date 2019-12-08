import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isChecked = false;
  constructor() { }

  onChange(event) {
    this.isChecked = event.checked;
    console.log(typeof(event));
    console.log(this.isChecked);
  }

  ngOnInit() {
  }

}
