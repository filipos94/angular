import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public user: any;
  constructor(private http: HttpClient) {
  }

  auth(){
    return this.http.get('http://localhost:3000/user/userValidation', {withCredentials: true}).subscribe(
      (res: any) => {
        this.user = res.username;
        console.log(this.user)
      }, err => {
        console.log(err)
    }
    )
  }
}
