import { Injectable } from '@angular/core';
import io from 'socket.io-client';
// import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { BASE_URL } from '../shared/constants/urls';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket = io(BASE_URL)

  constructor() { }
}
