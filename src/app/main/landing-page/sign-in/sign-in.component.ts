import {Component, Input, OnInit} from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations:[
    //TRIGGER 1
    trigger('FlipInOut', [
      //going in
      transition('void => *', [
        query('.background', style({
          width: '36px',
          height: '36px',
          transform: 'translateX(-36px) rotate(-90deg)',
          borderTopLeftRadius: '24px',
          borderBottomRightRadius: '24px'
        }), {optional: false}),
        query('.User, .Pass', style({
          opacity: 0,
          transform: 'translateX(200%)'
        }), {optional: false}),
        query('.background',
          animate('.5s .05s ease-out', style({
            width: '300px',
            height: '96px',
            transform:  'translateX(0) rotate(0deg)',
            borderTopLeftRadius: '1px',
            borderBottomRightRadius: '1px'
          })), {optional: false}
        ),
        query('.User, .Pass',
          animate('.4s', style({
            opacity: 1,
            transform: 'translateX(0)'

          })), {optional: false}
        ),
      ]),
      transition('* => void', [
        query('.User, .Pass',
          animate('.3s', style({
            opacity: 0
          })), {optional: false}),
      query('.background',
        animate('.3s .05s ease-out', style({
        width: '36px',
        height: '36px',
        transform: 'translateX(-36px) rotate(-90deg)',
        borderTopLeftRadius: '24px',
        borderBottomRightRadius: '24px'
      })), {optional: false}),


      ])
    ])
  ]
})
export class SignInComponent implements OnInit {

  @Input() Show;

  constructor() { }

  ngOnInit() {
  }

}
