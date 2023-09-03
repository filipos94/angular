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
      password: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  registerUser(){
    if (!this.myForm.valid) return

    const userData = {
      username: this.myForm.value.username,
      password: this.myForm.value.password,
      email: this.myForm.value.email
    }

    this.apiService.registerUser(userData)
      .subscribe(
        response => {
          console.log('Registration successful!', response);
        },
      )
  }
}
