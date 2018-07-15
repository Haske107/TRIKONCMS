import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {ContactService} from "./contact.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ContactService
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
