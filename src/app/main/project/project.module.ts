import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectSearchPageComponent} from "./project-search-page/project-search-page.component";
import {ProjectProfilePageComponent} from "./project-search-page/project-profile-page/project-profile-page.component";
import {HttpClient} from "@angular/common/http";
import {MatCardModule, MatGridListModule, MatTabsModule} from "@angular/material";
import { HidePipe } from './project-search-page/hide.pipe';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule
  ],
  declarations: [
    ProjectSearchPageComponent,
    ProjectProfilePageComponent,
    HidePipe
  ]
})
export class ProjectModule { }
