import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class UserLoginService {
  constructor(private httpClient: HttpClient) {}

  loginUser(userData:any){
    return this.httpClient.post('http://localhost:3000/user/userLogin', userData, {withCredentials: true});
  }
}
