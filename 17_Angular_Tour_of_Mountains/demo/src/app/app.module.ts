import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MountainsComponent } from './mountains/mountains.component';
import { MountainDetailComponent } from './mountain-detail/mountain-detail.component';
import { MountainService } from './mountain-service/mountain.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message-service/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { MountainSearchComponent } from './mountain-search/mountain-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MountainsComponent,
    MountainDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MountainSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
 
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    MountainService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
