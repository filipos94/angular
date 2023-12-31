import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserLoginService} from "./user-login.service";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private userLoginService: UserLoginService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private component: AppComponent) {}

  ngOnInit(){
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  userLogin(){
    /*
    Using an action for login
    dispatch.store(login({username: string, password: string}));
     */


    if (!this.formGroup.valid) return

    const userData = {
      username: this.formGroup.value.username,
      password: this.formGroup.value.password
    }

    this.userLoginService.loginUser(userData)
    .subscribe(
      response => {
        if (!response) console.error('error')
        else {
          this._router.navigate(['chatroom'])
        }
      }
    )
  }
}
