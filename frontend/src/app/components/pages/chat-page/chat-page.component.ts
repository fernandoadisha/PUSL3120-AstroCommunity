import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { io } from 'socket.io-client';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';
import { BASE_URL, IO_URL } from 'src/app/shared/constants/urls';
import { Chats } from 'src/app/shared/models/chats';
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
  msg!:Chats;
  messageList:Chats[] = [];

  constructor(private chatService: ChatService, private userService:UserService, private formBuilder:FormBuilder) {
    this.user = this.userService.currentUser;
    this.uname = this.user.name
  }

  messageForm = this.formBuilder.group({
    message: '',
  });

  ngOnInit(): void {
    this.chatService.setupSocketConnection();
    this.subscribeToMessage()
  }

  subscribeToMessage() {
    this.chatService.socket.on("incomming", (msg:Chats) => {
      this.messageList = [...this.messageList, msg];
    })
  }

  submitMessage() {
    const message = this.messageForm.get('message')?.value;
    if(message) {
      this.chatService.sendMessage(message, this.uname);
    }
    this.messageForm.reset();
  }
}
