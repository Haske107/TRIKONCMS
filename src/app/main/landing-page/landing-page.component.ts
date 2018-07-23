import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from "../project/project.service";
import {Project} from "../../TS Models/Project";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnChanges{

  Projects: Project[];

  @ViewChild('videoPlayer') videoplayer: any;

  constructor(private projectService: ProjectService) { }

  toggleVideo(event: any) {
  }
  ngOnInit() {

  }

  ngOnChanges() {

  }

}
