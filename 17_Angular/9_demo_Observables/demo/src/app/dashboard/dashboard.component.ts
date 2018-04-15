import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MountainService } from './../providers/mountain.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mountains: Array<string> = [];
  private sub: any;
  private userName: string = '';

  constructor(private mountainService: MountainService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    // get username from Query Params
    // Subscribe to Observable
    // pass anonymoue callback function to subscribe method
    this.sub = this.route
              .queryParams
              .subscribe(params => {
                this.userName = params['username'];
              });
              
    // call getMountains() method in MoutnainService
    this.mountainService.getMountains().subscribe(data => {
      this.mountains = data.mountains;
    });
  }

  onLogout() {
    this.router.navigate(['/']);
  }
}
