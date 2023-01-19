import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { ChatService } from 'src/app/services/chat.service';

const SOCKET_ENDPOINT = 'http://localhost:9000';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  socket:any

  constructor(private chatService: ChatService) {

  }

  ngOnInit(): void {

  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
  }


}
