import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  Base = 'http://trikon.xyz/contact';

  messages = [];

  constructor(private http: HttpClient) {
   }

  // TODO POST MESSAGE

  // TODO GET MESSAGE


}
