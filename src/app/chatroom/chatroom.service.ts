import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ChatroomService {
  constructor(private http: HttpClient) {}

  newMessages(messages:any) {
    return this.http.post('http://localhost:3000/chatroom/new-message', messages);
  }

  allMessages(){
    return this.http.get('http://localhost:3000/chatroom/all-messages');
  }
}
