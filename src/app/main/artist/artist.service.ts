import { Injectable } from '@angular/core';
import {Project} from "../../TS Models/Project";
import {HttpClient, HttpRequest} from "@angular/common/http";
import {User} from "../../TS Models/User";
import {last} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  Base = "http://trikon.xyz/users";

  CurrentArtist: Project;

  constructor(private http: HttpClient) {
  }

  // CREATE ARTIST
  createArtist(Artist: User) {
    const req = new HttpRequest('POST', this.Base + '/artist/', Artist);
    return this.http.request(req).pipe(
      last()
    );
  }

  // GET ARTIST
  getArtist(Artist_ID: string) {
    const req = new HttpRequest('GET', this.Base + '/artist/' + Artist_ID);
    return this.http.request(req).pipe(
      last()
    );
  }

  // GET ARTIST
  getArtists() {
    const req = new HttpRequest('GET', this.Base + '/artist/');
    return this.http.request(req).pipe(
      last()
    );
  }

  // UPDATE ARTIST
  updateArtist(Attribute: string, NewValue: string,
                Artist_ID: string, Mod_ID: string) {
    const body = {
      Attribute: Attribute, NewValue: NewValue,
      Artist_ID: Artist_ID, Mod_ID: Mod_ID
    };
    const req = new HttpRequest('POST', this.Base + '/artist/', body);
    return this.http.request(req).pipe(
      last()
    );
  }

  // REMOVE ARTIST
  removeArtist(Artist_ID: string, Mod_ID: string) {
    const body = {
      Artist_ID: Artist_ID, Mod_ID: Mod_ID
    };
    const req = new HttpRequest('POST', this.Base + '/artist/', body);
    return this.http.request(req).pipe(
      last()
    );
  }

}
