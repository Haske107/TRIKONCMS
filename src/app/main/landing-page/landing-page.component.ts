import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project/project.service";
import {Project} from "../../TS Models/Project";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  Projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(
      Projects => this.Projects = Projects
    );
  }

}
