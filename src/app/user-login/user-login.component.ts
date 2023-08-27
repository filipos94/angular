import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserLoginService} from "./user-login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  myGroup!: FormGroup;

  constructor(private userLoginService: UserLoginService, private formBuilder: FormBuilder, private _router: Router) {}

  ngOnInit(){
    this.myGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  userLogin(){
    if (!this.myGroup.valid) return

    const userData = {
      username: this.myGroup.value.username,
      password: this.myGroup.value.password
    }

    this.userLoginService.loginUser(userData)
    .subscribe(
      response => {
        if (!response) console.error('error')
        else {
          this._router.navigate([''])
        }
      }
    )
  }

}
