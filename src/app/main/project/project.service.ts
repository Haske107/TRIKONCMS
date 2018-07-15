import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {last, map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  BaseURL = 'http://localhost:3000/api/project';

  constructor(private http : HttpClient) { }

  getProject(ProjectName) {
    const req = new HttpRequest('GET', this.BaseURL + '/' + ProjectName);
    return this.http.request(req).pipe(
        last()
      );
  }

  getProjects() {
    const req = new HttpRequest('GET', this.BaseURL + '/all');
    return this.http.request(req).pipe(
      last()
    );
  }
}
