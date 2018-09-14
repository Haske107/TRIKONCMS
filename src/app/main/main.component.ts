///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {

  showLogin = false;
  public innerWidth: any;
  showBackground = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;

    console.log(this.innerWidth);
    setTimeout(() =>  {
          this.showBackground = true;
      }, 500
    )
  }


  buttonClick() {
    this.showLogin = !this.showLogin;
    setTimeout(() =>  {
      if(!this.showBackground) {
        this.showBackground = false;
      }
      }, 500
    )
  }

}
