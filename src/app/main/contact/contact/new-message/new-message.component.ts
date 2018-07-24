import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component ({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})

export class NewMessageComponent {

  constructor(private webService: WebService)

  message = {
    senderName: '', // this.auth.name,
    senderID: '', // this.auth.ID
    email: '',
    time: '',
    receiverID: '',
    content: ''
  };

  post() {
    this.webService.postMessage(this.message);
  }
}
