import {Component, Input, OnInit} from '@angular/core';
import {FlipInOut, SpinInOut} from "./sign-in.animations";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations:[
    FlipInOut,
    SpinInOut
  ]
})
export class SignInComponent implements OnInit {

  @Input() Show;

  constructor() { }

  ngOnInit() {
  }

}
