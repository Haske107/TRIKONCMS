import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css', './landing-page.m.component.css'],

})
export class LandingPageComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  LogInShow = false;
  Contact = false;
  About = false;
  Demo = false;
  isIOS = false;

  @ViewChild('Player') Player: any;
  @ViewChild('BACKGROUND') background: any;

  constructor(private router: Router) {
    this.isIOS = !!navigator.platform && /iPad|iPhone|iPod/i.test(navigator.platform);

  }


  toggleVideo(event: any) {

  }


  navHome() {
    this.router.navigateByUrl('/Landing');
  }

  ngAfterViewInit() {
  }

  ngOnInit() {



  }

  toggleLogIn() {
    this.LogInShow = !this.LogInShow;
  }

  setContact()  {
    this.Contact = !this.Contact;
    if(this.Contact) {
      this.About = false;
      this.Demo = false;
    }
  }

  setAbout()  {
    this.About= !this.About;
    if(this.About) {
      this.Contact = false;
      this.Demo = false;
    }
  }

  setDemo()  {
    this.Demo = !this.Demo;
    if(this.Demo) {
      this.Contact = false;
      this.About = false;
    }
  }

  removeAll() {
    this.Demo = false;
    this.About = false;
    this. Contact = false;
  }

  ngOnChanges() {

  }

  ngOnDestroy() {

  }

  hideAddressbar() {
    document.body.style.minHeight = '1000px';
    window.scrollTo(0, 1);
    document.body.style.minHeight = window.innerHeight + 'px';
  }

}
