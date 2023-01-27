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
  chatRoom: string = "General"
  messageList:Chats[] = [];
  messageListStar:Chats[] = [];
  messageListGeneral:Chats[] = [];
  messageListRockets:Chats[] = [];

  constructor(private chatService: ChatService, private userService:UserService, private formBuilder:FormBuilder) {
    this.user = this.userService.currentUser;
    this.uname = this.user.name
  }

  messageForm = this.formBuilder.group({
    message: '',
  });

  ngOnInit(): void {
    this.chatService.setupSocketConnection();
    this.subscribeToMessage();
    this.changeList(this.messageListGeneral);
  }

  subscribeToMessage() {
    this.chatService.socket.on("incomming", (msg:Chats) => {
      if(msg.room=="Stars") {
        this.messageListStar = [...this.messageListStar, msg]
        this.changeRoom(this.chatRoom);
      }

      if(msg.room=="General") {
        this.messageListGeneral = [...this.messageListGeneral, msg]
        this.changeRoom(this.chatRoom);
      }

      if(msg.room=="Rockets") {
        this.messageListRockets = [...this.messageListRockets, msg]
        this.changeRoom(this.chatRoom);
      }

      //this.messageList = [...this.messageList, msg];
    })
  }

  submitMessage() {
    const message = this.messageForm.get('message')?.value;
    if(message) {
      this.chatService.sendMessage(message, this.uname, this.chatRoom);
    }
    this.messageForm.reset();
  }

  changeRoom(room:string) {
    this.chatRoom = room;
    if(room=="Stars") {
      this.changeList(this.messageListStar);
    }
    if(room=="General") {
      this.changeList(this.messageListGeneral);
    }
    if(room=="Rockets") {
      this.changeList(this.messageListRockets);
    }
  }

  changeList(newlist:Chats[]) {
    this.messageList = newlist;
  }
}
