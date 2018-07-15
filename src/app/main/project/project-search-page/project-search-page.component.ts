import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-project-search-page',
  templateUrl: './project-search-page.component.html',
  styleUrls: ['./project-search-page.component.css']
})
export class ProjectSearchPageComponent implements OnInit {

  Projects = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(
      data => {
       data.body.obj.forEach(Project =>  {
          this.Projects.push(Project);
        });
      }
    );
  }
}
