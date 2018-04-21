import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavComponent } from './nav/nav.component';

import { MountainService} from './providers/mountain.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    GalleryComponent,
    JumbotronComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MountainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
