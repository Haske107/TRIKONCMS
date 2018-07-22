import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpRequest} from "@angular/common/http";
import {last, map} from "rxjs/internal/operators";
import {User} from "../TS Models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Base = "http://trikon.xyz/users";


  constructor(private http: HttpClient) { }

  // TODO LOG IN

  // TODO LOG OUT

  // TODO IS LOGGED IN / IN SESSION


  // CREATE ADMIN
  createAdmin(Admin: User) {
    const req = new HttpRequest('POST', this.Base + '/admin/', Admin);
    return this.http.request(req).pipe(
      map(Response => this.formatUserArray(Response)),
      last()
    );
  }

  // GET ADMIN
  getAdmin(Admin_ID: string) {
    const req = new HttpRequest('GET', this.Base + '/admin/' + Admin_ID);
    return this.http.request(req).pipe(
      map(Response => this.formatUserArray(Response)),
      last()
    );
  }

  // GET ADMINS
  getAdmins() {
    const req = new HttpRequest('GET', this.Base + '/admin/');
    return this.http.request(req).pipe(
      map(Response => this.formatUserArray(Response)),
      last()
    );
  }

  // UPDATE ADMIN
  updateAdmin(Attribute: string, NewValue: string, Admin_ID: string) {
    const body = {
      Attribute: Attribute, NewValue: NewValue, Admin_ID: Admin_ID
    };
    const req = new HttpRequest('POST', this.Base + '/admin/update', body);
    return this.http.request(req).pipe(
      map(Response => this.formatUserArray(Response)),
      last()
    );
  }

  // REMOVE ADMIN
  removeAdmin(Admin_ID: string) {
    const body = {
      Admin_ID: Admin_ID
    };
    const req = new HttpRequest('POST', this.Base + '/admin/remove', body);
    return this.http.request(req).pipe(
      map(Response => this.formatUserArray(Response)),
      last()
    );
  }

  private formatUserArray(event: HttpEvent<any>) {
    if (event.type === HttpEventType.Response) {
      let Users : User[] = [];
      if (event.body instanceof Array)  {
        Users = event.body;
      } else {
        return event.body;
      }
      return Users;
    }
  }

}
