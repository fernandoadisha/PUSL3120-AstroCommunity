import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { io } from 'socket.io-client';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';
import { BASE_URL, IO_URL } from 'src/app/shared/constants/urls';
import { User } from 'src/app/shared/models/User';


@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  socket:any
  user!:User;
  uname!:string;
  messageList:string[] = [];

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
    this.socket.on("incomming", (imsg:string, iname:string) => {
      this.messageList = [...this.messageList, imsg];
    })
  }

  sendMessage(msg: string, name:string) {
      this.socket.emit('message', msg, name);
  }


}
