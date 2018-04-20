import { Component } from '@angular/core';

import { MountainService } from './providers/mountain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Mountains';
  likes: number = 0;

  constructor(private mountainService: MountainService) { }

  mountainsObj = this.mountainService.getMountainsObj();

  countLikes($event) {
    this.likes = $event;
  }
}
