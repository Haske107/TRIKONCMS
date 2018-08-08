import {Component, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from "../project/project.service";
import {Project} from "../../TS Models/Project";
import {Router} from "@angular/router";
import {AboutSlide, ContactSlide, ScaleIn, SlideInOut} from "./landing-page.animations";
import {TimeInterval} from "rxjs/internal/operators/timeInterval";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css', './landing-page.m.component.css'],
  animations: [
    ScaleIn, SlideInOut, ContactSlide, AboutSlide
    ]
})
export class LandingPageComponent implements OnInit, OnChanges, OnDestroy{

  Projects: Project[];
  Scale = 1;
  ScaleUp = true;
  ShowMenu = false;
  LogInShow = false;
  Contactshow = false;
  AboutShow = false;
  @ViewChild('videoPlayer') videoplayer: any;

  constructor(private projectService: ProjectService, private router: Router) { }

  Degrees = 0;
  Timer: any;


  toggleVideo(event: any) {
  }
  ngOnInit() {

    this.Timer = setInterval(() => {
      if (this.ScaleUp)  {
        if (this.Scale >= 1.5) {
          this.ScaleUp = false;
          this.Scale -= .0006;
        } else {
          this.Scale += .0006;
        }
      } else {
        if (this.Scale <= 1.3) {
          this.ScaleUp = true;
          this.Scale += .0006;
        } else {
          this.Scale -= .0006;
        }
      }
      if(this.Degrees === 359)  {
        this.Degrees = 0;
      }
      this.Degrees +=1 ;
    }, 100);

  }

  navToProjects() {
    this.router.navigateByUrl('/Search');
  }

  toggleLogIn() {
    this.LogInShow = !this.LogInShow;
  }
  setContact()  {
    this.Contactshow = !this.Contactshow;
    this.Contactshow ? this.AboutShow = false : null;
  }
  setAbout()  {
    this.AboutShow = !this.AboutShow;
    this.AboutShow ? this.Contactshow = false : null;
  }

  ngOnChanges() {

  }

  ngOnDestroy() {
    clearInterval(this.Timer);
  }

  tickHue() {

  }

}
