import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../project.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-project-profile-page-guest',
  templateUrl: './project-profile-page-guest.component.html',
  styleUrls: ['./project-profile-page-guest.component.css']
})
export class ProjectProfilePageGuestComponent implements OnInit {

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
      this.projectService.getProject(params['projectname'].replace('-','')).subscribe(  Project =>  {
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
