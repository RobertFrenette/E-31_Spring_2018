import { Component, OnInit } from '@angular/core';

import { MountainService } from './../providers/mountain.service';

@Component({
  selector: 'app-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.css']
})
export class MountainComponent implements OnInit {

  mountains: Array<string> = [];

  // create instance of MountainService
  constructor(private mountainService: MountainService) {}
    
  ngOnInit() {
      this.mountains = this.mountainService.getMountains();
  }

}
