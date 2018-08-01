import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ProjectService} from "../../project.service";
import {Project} from "../../../../TS Models/Project";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-project-profile-page',
  templateUrl: './project-profile-page.component.html',
  styleUrls: ['./project-profile-page.component.css', './project-profile-page.m.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class ProjectProfilePageComponent implements OnInit, OnDestroy {

  Project;
  Sub: any;
  Col = 6;

  constructor(
    public projectService : ProjectService,
    private router: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {

    this.Sub = this.router.params.subscribe(params =>  {
      this.projectService.getProject(params['projectname'].replace('-',' ')).subscribe(  Project =>  {
        this.Project = Project;
      });
    });


  }

  navToHome() {
    this._router.navigateByUrl('/');
  }

  ngOnDestroy() {
    this.Sub.unsubscribe();
  }

  toWebString(string) {
    return string.replace(/ /g, '%20');
  }
}
