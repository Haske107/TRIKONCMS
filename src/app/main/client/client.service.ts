import { Injectable } from '@angular/core';
import {last} from "rxjs/internal/operators";
import {HttpClient, HttpRequest} from "@angular/common/http";
import {User} from "../../TS Models/User";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  Base = "http://trikon.xyz/users";

  CurrentClient: User;

  constructor(private http: HttpClient) { }

  // CREATE CLIENT
  createClient(Client: User) {
    const req = new HttpRequest('POST', this.Base + '/client/', Client);
    return this.http.request(req).pipe(
      last()
    );
  }

  // GET CLIENT
  getClient(Client_ID: string) {
    const req = new HttpRequest('GET', this.Base + '/client/' + Client_ID);
    return this.http.request(req).pipe(
      last()
    );
  }

  // GET CLIENTS
  getClients() {
    const req = new HttpRequest('GET', this.Base + '/client/');
    return this.http.request(req).pipe(
      last()
    );
  }

  // UPDATE CLIENT
  updateClient(Attribute: string, NewValue: string,
               Client_ID: string, Mod_ID: string) {
    const body = {
      Attribute: Attribute, NewValue: NewValue,
      Client_ID: Client_ID, Mod_ID: Mod_ID
    };
    const req = new HttpRequest('POST', this.Base + '/client/', body);
    return this.http.request(req).pipe(
      last()
    );
  }

  // REMOVE CLIENT
  removeClient(Client_ID: string, Mod_ID: string) {
    const body = {
      Client_ID: Client_ID, Mod_ID: Mod_ID
    };
    const req = new HttpRequest('POST', this.Base + '/client/', body);
    return this.http.request(req).pipe(
      last()
    );
  }

}
