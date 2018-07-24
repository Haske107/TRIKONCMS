import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpRequest} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  Base = 'http://trikon.xyz/contact';

  messages = [];

  constructor(private http: HttpClient) {
    this.getMessages();
   }

  // TODO POST MESSAGE

  // TODO GET MESSAGE

  async getMessages () {
    var response = await this.http.get(this.BaseURL + '/messages').toPromise();
    this.messsages = response.json();
  }

  async postMessage(message) {
    var response this.http.post(this.BaseURL + '/messages', message).toPromise();
    this.messages.push(response.json());
  }
}
