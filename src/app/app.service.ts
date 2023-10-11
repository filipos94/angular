import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {usernameInterface} from "./header/state-header/header-page.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public user: any;
  constructor(private http: HttpClient) {
  }

  auth(){
    return this.http.get<usernameInterface>('http://localhost:3000/user/userValidation', {withCredentials: true})
  }
}
