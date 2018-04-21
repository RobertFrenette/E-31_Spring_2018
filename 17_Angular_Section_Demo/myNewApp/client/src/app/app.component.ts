import { Component, OnInit } from '@angular/core';

import { MountainService } from './providers/mountain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Mountains';
  likes: number = 0;
  mountainsObj = null;

  constructor(private mountainService: MountainService) { }
 
  ngOnInit() {
    // Observable - Happy Path for demo
    this.mountainService.getMountainsObj().subscribe((mountains) => {
      this.mountainsObj = mountains;
    });
  }

  countLikes($event) {
    this.likes = $event;
  }
}