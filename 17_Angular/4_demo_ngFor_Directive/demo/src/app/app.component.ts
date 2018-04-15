import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mountains';
  
  mountains: Array<string> = [];
    
  // propName: type = defaultValue
  mountainName: string = '';
  mountainElevation: string = '';
  mountainDescription: string = '';
  currentYear: number = 2018;
  
  newMountainAdded: boolean = false;
  
  // executed when Add Mountain is clicked
  onAddMountain(): void {
    this.mountains.push(`${this.mountainName} - ${this.mountainElevation}'. ${this.mountainDescription}`);
    this.newMountainAdded = true;
  }
  
  // executed when the Reset button is clicked
  onReset(): void {
    this.mountainName = '';
    this.mountainElevation = '';
    this.mountainDescription = '';
    this.newMountainAdded = false;
  }
  
  // declare a method
  getCurrentYear(): number {
    return this.currentYear;
  }
  
  getColor(): string {
    return this.newMountainAdded === true ? '#000080' : '#FF0000'; // navy : red
  }
}
