import { Component, OnInit } from '@angular/core';

import { Mountain } from './mountain.model';

@Component({
  selector: 'app-mountains',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.css']
})
export class MountainComponent implements OnInit {

  // Array to hold Mountain Objects
  mountains: Mountain[] = [
    new Mountain('Mt. Washington', 6288, 'Mt. Washington is the highest peak east of the Mississippi River and north of the Carolinas.'),
    new Mountain('Mt. Adams', 5799, 'Mt. Adams is the second highest peak in New England, offering spectacular views across the Great Gulf and King Ravine.'),
    new Mountain('Mt. Jefferson', 5716, 'Mt. Jefferson has three summits a short distance apart, in line northwest and southeast, with the highest in the middle.'),
  ];

  constructor() { }

  ngOnInit() {}
}
