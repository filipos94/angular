import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {allMessages, newMessage} from "./state-chatroom/chatroom-page.interface";

@Injectable({
  providedIn: 'root'
})

export class ChatroomService {
  constructor(private http: HttpClient) {}

  newMessages(messages:any) {
    return this.http.post<newMessage>('http://localhost:3000/chatroom/new-message', messages, {withCredentials: true});
  }

  allMessages(){
    return this.http.get<allMessages>('http://localhost:3000/chatroom/all-messages', {withCredentials: true});
  }
}
