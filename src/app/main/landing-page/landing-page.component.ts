import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from "../project/project.service";
import {Project} from "../../TS Models/Project";
import {Router} from "@angular/router";
import {animate, group, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css', './landing-page.m.component.css'],
  animations: [
    //TRIGGER 1
    trigger('slideInOut', [
      //going in
      transition('void => *', [
        query('.tab', style({
          transform: 'translateX(-200%)',
          opacity: 0
        })),
        query('.tab', stagger('-200ms', [
          animate('600ms .1s ease-out', style({
            opacity: 1,
            transform: 'translateY(0%)'
          }))
        ]))
      ]),
      //going out
      transition('* => void', [
        query('.tile', style({
          opacity: 1,
          transform: 'translateY(0%)'
        })),
        query('.tile', stagger('-500ms', [
          animate('100ms .1s ease-out', style({
            opacity: 0.2,
            transform: 'translateY(-200%)'
          }))
        ]))
      ])
    ]),



    trigger('scalein', [
      //going in
      transition('void => *', [
        query('.crop-wrapper', style({
          transform: 'scale(.1) ',
          opacity: 0
        })),
        query('.Border', style({
          transform: 'scale(.1) ',
          opacity: 0
        })),
        group([
          query('.crop-wrapper', animate('7s .5s ease-in-out', style({
              opacity: 1,
              transform: 'scale(1) '
            }))
          ),
          query('.Border', animate('7s .5s ease-in-out', style({
              opacity: .3,
              transform: 'scale(1)  '
            }))
          )
        ])
      ]),
      //going out
      transition('* => void', [
        query('.crop-wrapper, .Border', style({
          transform: 'scale(-200%) rotate(-720deg)',
          opacity: 0
        })),
        query('.crop-wrapper, .Border', animate('4s .1s ease-out', style({
            opacity: 1,
            transform: 'scale(0%) rotate(0deg)'
          }))
        )
      ])
    ])

    ///////
    ]
})
export class LandingPageComponent implements OnInit, OnChanges{

  Projects: Project[];
  ShowMenu = false;

  @ViewChild('videoPlayer') videoplayer: any;

  constructor(private projectService: ProjectService, private router: Router) { }

  toggleVideo(event: any) {
  }
  ngOnInit() {
  }

  navToProjects() {
    this.router.navigateByUrl('/Search');
  }


  ngOnChanges() {

  }

}
