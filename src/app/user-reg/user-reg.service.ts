import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {}

  registerUser(userData: any){
    return this.http.post('http://localhost:3000/user/new-users', userData)
  }
}
