import {Component, OnInit} from '@angular/core';
import {ApiService} from "./user-reg.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.scss']
})
export class UserRegComponent implements OnInit{

  myForm: FormGroup = new FormGroup({});

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  registerUser(){
    const userData = {
      username: this.myForm.value.username,
      password: this.myForm.value.password
    }

    this.apiService.registerUser(userData)
      .subscribe(
        response => {
          console.log('Registration successful!', response);
        },
        error => {
          console.error('Registration error', error);
        }
      )
  }
}
