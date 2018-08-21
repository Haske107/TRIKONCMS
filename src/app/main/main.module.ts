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
import {SignInComponent} from "./sign-in/sign-in.component";
import {ContentService} from "./content.service";
import {AuthService} from "./auth.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AboutComponent } from './about/about.component';
import {MatButtonModule, MatCardModule} from "@angular/material";
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from "@angular/common/http";
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    MainComponent,
    LandingPageComponent,
    NavigatorComponent,
    SignInComponent,
    AboutComponent,
    ContactComponent,
    DemoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    Routing,
    HttpClientModule,
    CommonModule,
    ProjectModule,
    ArtistModule,
    ClientModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:  [
    MainComponent
  ],
  providers: [
    ProjectService,
    ArtistService,
    ClientService,
    ContentService,
    AuthService
  ]
})
export class MainModule { }
