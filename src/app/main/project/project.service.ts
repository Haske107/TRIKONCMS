import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpRequest} from "@angular/common/http";
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
      map(response => this.formatProjectArray(response)),
      last()
    );
  }

  formatProjectArray(event: HttpEvent<any>) {
    if (event.type === HttpEventType.Response) {
      let Projects = [];
      event.body.obj.forEach(project => {
        Projects.push(project);
      });
      return Projects;
    }
  }

}
