import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { io } from 'socket.io-client';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';
import { BASE_URL, IO_URL } from 'src/app/shared/constants/urls';
//import { Chats } from 'src/app/shared/models/chats';
import { User } from 'src/app/shared/models/User';

class Chats {
  message!:string;
  name!:string;
}

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {


  socket:any
  user!:User;
  uname!:string;
  messageList:Chats[] = [];

  constructor(private chatService: ChatService, private userService:UserService, private formBuilder:FormBuilder) {
    this.user = this.userService.currentUser;
    this.uname = this.user.name
  }

  messageForm = this.formBuilder.group({
    message: '',
  });

  ngOnInit(): void {
    this.setupSocketConnection();
    this.subscribeToMessage()
  }

  setupSocketConnection() {
    //this.chatService.setupSocketConnection;
    this.socket = io(IO_URL, {reconnection: true});
  }

  submitMessage() {
    const message = this.messageForm.get('message')?.value;
    if(message) {
      this.sendMessage(message, this.uname);
    }
    this.messageForm.reset();
  }

  subscribeToMessage() {
    this.socket.on("incomming", (msg:Chats) => {
      //alert(msg.message);
      this.messageList = [...this.messageList, msg];
    })
  }

  sendMessage(msg: string, name:string) {
      this.socket.emit('message', msg, name);
  }


}
