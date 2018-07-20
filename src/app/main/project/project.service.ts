import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpRequest} from "@angular/common/http";
import {last, map} from "rxjs/internal/operators";
import {Project} from "../../TS Models/Project"

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  BaseURL = 'http://localhost:3000/api/project';
  CurrentProject: Project;

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
      let Projects : Project[] = [];
      event.body.obj.forEach(project => {
        Projects.push(project);
      });
      return Projects;
    }
  }

}
