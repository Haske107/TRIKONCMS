import {Component, OnChanges, OnInit} from '@angular/core';
import {ProjectService} from "../project.service";
import {Router} from "@angular/router";
import {Project} from "../../../TS Models/Project";
import {SlideInOut} from "./project-search.animations";

@Component({
  selector: 'app-project-search-page',
  templateUrl: './project-search-page.component.html',
  styleUrls: ['./project-search-page.component.css', './project-search-page.m.component.css'],
  animations: [
   SlideInOut
  ]
})


export class ProjectSearchPageComponent implements OnInit {

  PageState = 'in';
  Projects : Project[];
  CurrProject: Project;
  Col = 6;

  Type = "all";



  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    if (window.screen.width < 500)  {
      this.Col = 1;
    }
    this.projectService.getProjects().subscribe(
      _Projects => {
         this.Projects = _Projects;
         this.CurrProject = this.Projects[0];
         this.Projects.forEach(Project => {
           if (Project.Stills[0]) {
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
    this.router.navigateByUrl('/Project/' + this.CurrProject.Name.split(' ').join('-'));
  }

  toggle()  {
    this.PageState === 'in' ? this.PageState = 'out'
      : this.PageState = 'in';
  }

  selectType(type: string)  {
    if (this.Type === type) {
      this.Type = 'all';
    } else  {
      this.Type = type;
    }
  }




}
