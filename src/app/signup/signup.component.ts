import { Component, OnInit } from '@angular/core';
import {IUserSignUp} from '../shared/interfaces';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: IUserSignUp) {
    console.log(value);
  }

}
