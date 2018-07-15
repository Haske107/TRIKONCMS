import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {last, map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  BaseURL = 'http://172.20.21.235:3000/content/';


  constructor( private http: HttpClient) { }


  getSingleBTS(ProjectName, FileName) {
    const body = JSON.stringify({ProjectName: ProjectName, FileName: FileName});
    const req = new HttpRequest('POST', this.BaseURL + 'BTS', body);
    return this.http.request(req).pipe(
      last()
    );
  }
}
