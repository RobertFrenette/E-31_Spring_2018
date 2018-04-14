import { Component, OnInit } from '@angular/core';
import { Mountain } from '../mountain';
import { MountainService } from '../mountain-service/mountain.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  mountains: Mountain[] = [];

  constructor(private mountiainService: MountainService) { }

  ngOnInit() {
    this.getMountains();
  }

  getMountains(): void {
    this.mountiainService.getMountains()
      .subscribe(mountains => this.mountains = mountains.slice(0, 4));
  }
}