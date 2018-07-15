import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project.service";
import {HttpEvent} from "@angular/common/http";

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
      _Projects => {
         this.Projects = _Projects;

         console.log(_Projects[1].BTS[0].Filename);
      });
  }
}
