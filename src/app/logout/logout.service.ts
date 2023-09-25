import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) {}

  logout() {
    return this.http.get('http://localhost:4200/user/logout')
  }
}
