import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {last, map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})


export class ContentService {

  BaseURL = 'http://45.48.226.49/content/';


  constructor( private http: HttpClient) { }


  postBTS(ProjectName, Formdata) {
    // DESCRIBE CONTENT
    const headers = new HttpHeaders({'content': 'FormData'});

    // SET UP TOKEN
    const token = localStorage.getItem('id_token') ? '?token=' + localStorage.getItem('id_token') : '';

    // SET UP REQUEST
    const req = new HttpRequest('POST', this.BaseURL + '/content/' + ProjectName, Formdata, {
      headers: headers,
      reportProgress: true
    });

    // BOMB'S AWAY
    return this.http.request(req).pipe(
      map(message => this.retrievePercentageUploaded(message)),
      last()
    );
  }

  retrievePercentageUploaded(event)    {
    if (event.type === 1)   {
      const num = event.loaded / event.total * 100;
      //this.GalleryPercentage.emit(num);
      return num;
    }
  }
}
