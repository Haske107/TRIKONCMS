import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {last} from "rxjs/internal/operators";
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
      last()
    );
  }

  // GET ADMIN
  getAdmin(Admin_ID: string) {
    const req = new HttpRequest('GET', this.Base + '/admin/' + Admin_ID);
    return this.http.request(req).pipe(
      last()
    );
  }

  // GET ADMINS
  getAdmins() {
    const req = new HttpRequest('GET', this.Base + '/admin/');
    return this.http.request(req).pipe(
      last()
    );
  }

  // UPDATE ADMIN
  updateAdmin(Attribute: string, NewValue: string, Admin_ID: string) {
    const body = {
      Attribute: Attribute, NewValue: NewValue, Admin_ID: Admin_ID
    };
    const req = new HttpRequest('POST', this.Base + '/admin/', body);
    return this.http.request(req).pipe(
      last()
    );
  }

  // REMOVE ADMIN
  removeAdmin(Admin_ID: string) {
    const body = {
      Admin_ID: Admin_ID
    };
    const req = new HttpRequest('POST', this.Base + '/admin/', body);
    return this.http.request(req).pipe(
      last()
    );
  }

}
