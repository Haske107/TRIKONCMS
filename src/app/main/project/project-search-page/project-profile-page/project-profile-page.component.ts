import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../project.service";
import {Project} from "../../../../TS Models/Project";

@Component({
  selector: 'app-project-profile-page',
  templateUrl: './project-profile-page.component.html',
  styleUrls: ['./project-profile-page.component.css']
})
export class ProjectProfilePageComponent implements OnInit {

  Project: Project;

  constructor(public projectService : ProjectService) { }

  ngOnInit() {
  }



}
