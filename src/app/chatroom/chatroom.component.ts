import {Component, OnInit} from '@angular/core';
import {ChatroomService} from "./chatroom.service";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import * as ChatroomActions from './state-chatroom/chatroom-page.actions'
import {allMessagesGet} from "./state-chatroom/chatroom-page.actions";
import {selectMessages} from './state-chatroom/chatroom-page.reducer'

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {
  formGroup!: FormGroup;
  messages: any;
  message: string = '';

  constructor(private readonly chatroomService: ChatroomService, private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(){
    this.formGroup = this.formBuilder.group({
      message: ['', Validators.required],
    })
    this.allMessages()
  }

  allMessages(){
    this.store.dispatch(ChatroomActions.allMessagesGet())
    this.store.select(selectMessages).subscribe(
      messages => {
        console.log(messages);
        this.messages = messages
      }
    )
  }

  clearInput(){
    this.message = '';
  }

  newMessage(){
    if (!this.formGroup.valid) return
    const messageData = {
      message: this.formGroup.value.message
    }
    this.store.dispatch(ChatroomActions.newMessages(this.message))
    this.allMessages()
  }
}
