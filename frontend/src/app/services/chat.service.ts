import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
// import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { BASE_URL, IO_URL } from '../shared/constants/urls';
import { Chats } from '../shared/models/chats';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket:any;

  constructor() {

  }

  setupSocketConnection() {
    this.socket = io(IO_URL, {reconnection: true})
    if(!this.socket) {
      console.log("Connection Failed");
    }
  }

  sendMessage(msg: string, name:string, chatRoom:string) {
    if(this.socket) {
      this.socket.emit('message', msg, name, chatRoom);
    } else {
      alert("sokcet undifeined")
    }
  }


}
