import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {ContactService} from './contact.service';
import { NewMessageComponent } from '../contact/contact/new-message/new-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ContactService
  ],
  declarations: [
    ContactComponent,
    NewMessageComponent
  ]
})
export class ContactModule { }
