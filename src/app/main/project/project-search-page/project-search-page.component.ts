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
      _Projects => {
         this.Projects = _Projects;
         // PREVENT DS_STORE FROM SNEAKING INTO THE FILES
         this.Projects.forEach(Project => {
           Project.BTS.forEach((BTS, i) => {
             if (BTS.Filename === ".DS_Store")  {
               Project.BTS.splice(i,1);
               console.log(BTS);
             }
           });
         });
         console.log(_Projects[1].BTS[0].Filename);
      });
  }
}
