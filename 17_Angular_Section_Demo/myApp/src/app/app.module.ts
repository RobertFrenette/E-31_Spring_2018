import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { GalleryComponent } from './gallery/gallery.component';

import { MountainService} from './providers/mountain.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    JumbotronComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MountainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
