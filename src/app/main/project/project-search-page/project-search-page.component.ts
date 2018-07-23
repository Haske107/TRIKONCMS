import {Component, OnChanges, OnInit} from '@angular/core';
import {ProjectService} from "../project.service";
import {Router} from "@angular/router";
import {Project} from "../../../TS Models/Project";

@Component({
  selector: 'app-project-search-page',
  templateUrl: './project-search-page.component.html',
  styleUrls: ['./project-search-page.component.css']
})

export class ProjectSearchPageComponent implements OnInit {

  Projects = [];
  CurrProject: Project;
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(
      _Projects => {
         this.Projects = _Projects;
         this.CurrProject = this.Projects[0];


         this.Projects.forEach(Project => {
           if (Project.Stills[0]) {
             console.log(Project.Stills[0].Filename);
           }
         })
      });
  }

  navToHome() {
    this.router.navigateByUrl('/');
  }

  selectProject(Project: Project) {
    this.projectService.CurrentProject = Project;
    this.CurrProject = this.projectService.CurrentProject;
  }




}
