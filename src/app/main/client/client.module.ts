import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSearchPageComponent } from './client-search-page/client-search-page.component';
import {ClientProfilePageComponent} from "./client-search-page/client-profile-page/client-profile-page.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ClientProfilePageComponent,
    ClientSearchPageComponent
  ]
})
export class ClientModule { }
