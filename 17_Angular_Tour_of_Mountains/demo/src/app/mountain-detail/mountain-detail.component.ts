import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Mountain } from '../mountain';
import { MountainService }  from '../mountain-service/mountain.service';

@Component({
  selector: 'app-mountain-detail',
  templateUrl: './mountain-detail.component.html',
  styleUrls: ['./mountain-detail.component.css']
})
export class MountainDetailComponent implements OnInit {
  @Input() mountain: Mountain;

  constructor(
    private route: ActivatedRoute,
    private mountainService: MountainService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMountain();
  }

  getMountain(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mountainService.getMountain(id)
      .subscribe(mountain => this.mountain = mountain);
  }

  goBack(): void {
    this.location.back();
  }
}
