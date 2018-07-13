import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './main/landing-page/landing-page.component';
import { ProjectSearchPageComponent } from './main/project/project-search-page/project-search-page.component';
import { ArtistSearchPageComponent } from './main/artist/artist-search-page/artist-search-page.component';
import { ArtistProfilePageComponent } from './main/artist/artist-search-page/artist-profile-page/artist-profile-page.component';
import { ProjectProfilePageComponent } from './main/project/project-search-page/project-profile-page/project-profile-page.component';
import { ClientProfilePageComponent } from './main/client/client-profile-page/client-profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectSearchPageComponent,
    ArtistSearchPageComponent,
    ArtistProfilePageComponent,
    ProjectProfilePageComponent,
    ClientProfilePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
