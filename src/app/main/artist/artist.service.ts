import { Injectable } from '@angular/core';
import {Project} from "../../TS Models/Project";
import {HttpClient, HttpEvent, HttpEventType, HttpRequest} from "@angular/common/http";
import {User} from "../../TS Models/User";
import {last, map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private Base = "http://trikon.xyz/users";

  public CurrentArtist: Project;

  constructor(private http: HttpClient) {
  }

  // CREATE ARTIST
  public createArtist(Artist: User) {
    const req = new HttpRequest('POST', this.Base + '/artist/', Artist);
    return this.http.request(req).pipe(
      map( Response => this.formatUserArray(Response)),
      last()
    );
  }

  // GET ARTIST
  public getArtist(Artist_ID: string) {
    const req = new HttpRequest('GET', this.Base + '/artist/' + Artist_ID);
    return this.http.request(req).pipe(
      map( Response => this.formatUserArray(Response)),
      last()
    );
  }

  // GET ARTIST
  public getArtists() {
    const req = new HttpRequest('GET', this.Base + '/artist/');
    return this.http.request(req).pipe(
      map( Response => this.formatUserArray(Response)),
      last()
    );
  }

  // UPDATE ARTIST
  public updateArtist(Attribute: string, NewValue: string,
                Artist_ID: string, Mod_ID: string) {
    const body = {
      Attribute: Attribute, NewValue: NewValue,
      Artist_ID: Artist_ID, Mod_ID: Mod_ID
    };
    const req = new HttpRequest('POST', this.Base + '/artist/update', body);
    return this.http.request(req).pipe(
      map( Response => this.formatUserArray(Response)),
      last()
    );
  }

  // REMOVE ARTIST
  public removeArtist(Artist_ID: string, Mod_ID: string) {
    const body = {
      Artist_ID: Artist_ID, Mod_ID: Mod_ID
    };
    const req = new HttpRequest('POST', this.Base + '/artist/remove', body);
    return this.http.request(req).pipe(
      map( Response => this.formatUserArray(Response)),
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
