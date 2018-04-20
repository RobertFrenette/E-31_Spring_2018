import { Injectable } from '@angular/core';

@Injectable()
export class MountainService {

  constructor() { }

  mountainsObj = [
    {
      "name": "Mt. Washington",
      "img_src": "washington.jpg",
      "elevation": "6,288"
    },
    {
      "name": "Mt. Adams",
      "img_src": "adams.jpg",
      "elevation": "5,799"
    },
    {
      "name": "Mt. Jefferson",
      "img_src": "jefferson.jpg",
      "elevation": "5,716"
    }
  ];

  getMountainsObj() {
    return this.mountainsObj;
  }

}
