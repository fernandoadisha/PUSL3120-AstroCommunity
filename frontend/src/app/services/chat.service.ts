import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
// import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { BASE_URL, IO_URL } from '../shared/constants/urls';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket:any;

  constructor() {

  }

  setupSocketConnection() {
    this.socket = io(IO_URL, {reconnection: true})
  }

  subscrideToMessages(cb:any) {
    if(!this.socket) return;
    this.socket.on('message', (msg:string, name:string )=> {
      return {msg, name};
    })

  }

  sendMessage(msg: string, name:string) {
    if(this.socket) {
      this.socket.emit('message', msg, name);
    } else {
      alert("sokcet undifeined")
    }
  }


}
