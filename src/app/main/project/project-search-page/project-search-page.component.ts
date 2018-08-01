import {Component, OnChanges, OnInit} from '@angular/core';
import {ProjectService} from "../project.service";
import {Router} from "@angular/router";
import {Project} from "../../../TS Models/Project";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-project-search-page',
  templateUrl: './project-search-page.component.html',
  styleUrls: ['./project-search-page.component.css'],
  animations: [
    trigger('slideInOut', [
      transition('void => *', [
        query('.tile', style({
          transform: 'translateY(200%)',
          opacity: 0
        })),
        query('.tile', stagger('200ms', [
          animate('600ms .1s ease-out', style({
            opacity: 1,
            transform: 'translateY(0%)'
          }))
        ]))
      ]),
      transition('* => void', [
        query('.tile', style({
          opacity: 1,
          transform: 'translateY(0%)'
        })),
        query('.tile', stagger('500ms', [
          animate('100ms .1s ease-out', style({
            opacity: 0.2,
            transform: 'translateY(200%)'
          }))
        ]))
      ])
    ])
  ]
})


export class ProjectSearchPageComponent implements OnInit {

  PageState = 'in';
  Projects : Project[];
  CurrProject: Project;
  Col = 6;
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
    this.router.navigateByUrl('/Project/' + this.CurrProject.Name.replace(/ /g, '-'));
  }

  toggle()  {
    this.PageState === 'in' ? this.PageState = 'out'
      : this.PageState = 'in';
  }




}
