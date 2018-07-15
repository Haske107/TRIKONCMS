import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectService} from "./project/project.service";
import {ProjectModule} from "./project/project.module";
import {ArtistModule} from "./artist/artist.module";
import {ClientModule} from "./client/client.module";
import {ArtistService} from "./artist/artist.service";
import {ClientService} from "./client/client.service";
import {MainComponent} from "./main.component";
import {Routing} from "./main.router";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {NavigatorComponent} from "./landing-page/navigator/navigator.component";
import {SignInComponent} from "./landing-page/sign-in/sign-in.component";
import {ContactModule} from "./contact/contact.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MainComponent,
    LandingPageComponent,
    NavigatorComponent,
    SignInComponent
  ],
  imports: [
    Routing,
    HttpClientModule,
    CommonModule,
    ProjectModule,
    ArtistModule,
    ClientModule,
    ContactModule
  ],
  exports:  [
    MainComponent
  ],
  providers: [
    ProjectService,
    ArtistService,
    ClientService
  ]
})
export class MainModule { }
