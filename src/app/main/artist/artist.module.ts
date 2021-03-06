import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArtistSearchPageComponent} from "./artist-search-page/artist-search-page.component";
import {ArtistProfilePageComponent} from "./artist-search-page/artist-profile-page/artist-profile-page.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ArtistSearchPageComponent,
    ArtistProfilePageComponent
  ]
})
export class ArtistModule { }
