import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectSearchPageComponent} from "./project-search-page/project-search-page.component";
import {ProjectProfilePageComponent} from "./project-search-page/project-profile-page/project-profile-page.component";
import {HttpClient} from "@angular/common/http";
import {MatGridListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule
  ],
  declarations: [
    ProjectSearchPageComponent,
    ProjectProfilePageComponent
  ]
})
export class ProjectModule { }
