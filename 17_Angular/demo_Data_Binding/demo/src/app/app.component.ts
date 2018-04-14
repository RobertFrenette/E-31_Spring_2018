import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mountains';
    
  // propName: type = defaultValue
  mountainName: string = '';
  mountainElevation: string = '';
  mountainDescription: string = '';
  currentYear: number = 2018;
  
  addNewMountains: boolean = false;

  // declare a method
  getCurrentYear(): number {
    return this.currentYear;
  }
}
