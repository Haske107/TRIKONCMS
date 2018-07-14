import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArtistSearchPageComponent} from "./artist-search-page/artist-search-page.component";
import {ArtistProfilePageComponent} from "./artist-search-page/artist-profile-page/artist-profile-page.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ArtistSearchPageComponent,
    ArtistProfilePageComponent
  ]
})
export class ArtistModule { }
