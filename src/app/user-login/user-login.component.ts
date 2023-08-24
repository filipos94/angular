import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserLoginService} from "./user-login.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  myGroup!: FormGroup;

  constructor(private userLoginService: UserLoginService, private formBuilder: FormBuilder) {}

  userLogin(){
    const userData = {
      username: this.myGroup.value.username,
      password: this.myGroup.value.password
    }

    this.userLoginService.loginUser(userData)
    .subscribe(
      response => {
        console.log('Login Tried!', response);
      },
      error => {
        console.error('Login Error', error);
      }
    )
  }

}
