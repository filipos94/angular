import {Component, OnInit} from '@angular/core';
import {ChatroomService} from "./chatroom.service";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {
  formGroup!: FormGroup;
  messages: any;

  constructor(private readonly chatroomService: ChatroomService, private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.formGroup = this.formBuilder.group({
      message: ['', Validators.required],
    })
    this.allMessages();
  }

  allMessages(){
    this.chatroomService.allMessages().subscribe(
      response => {
        if (response) this.messages = response;
      }
    )
  }

  newMessage(){
    if (!this.formGroup.valid) return

    const messageData = {
      message: this.formGroup.value.message
    }

    this.chatroomService.newMessages(messageData).subscribe(
      response => {
        if (!response) console.error("error")
        else {
          console.log("Message Submited", response)
        }
      }
    )
  }
}
