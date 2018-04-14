import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { MountainsComponent } from './mountains/mountains.component';
import { MountainDetailComponent } from './mountain-detail/mountain-detail.component';
import { MountainService } from './mountain-service/mountain.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message-service/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MountainsComponent,
    MountainDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    MountainService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
