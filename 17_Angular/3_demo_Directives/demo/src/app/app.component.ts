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

  newMountain: string = '';
  newMountainAdded: boolean = false;

  // declare a method
  getCurrentYear(): number {
    return this.currentYear;
  }

  // executed when the Reset button is clicked
  onReset(): void {
    this.mountainName = '';
    this.mountainElevation = '';
    this.mountainDescription = '';
    this.addNewMountains = false;
    this.newMountainAdded = false;
  }

  // executed when Add Mountain is clicked
  onAddMountain(): void {
    this.newMountain = `${this.mountainName} - ${this.mountainElevation}' - ${this.mountainDescription}`;
    this.addNewMountains = true;
    this.newMountainAdded = true;
  }

  getColor(): string {
    return this.newMountainAdded === true ? '#000080' : '#FF0000'; // navy : red
  }
}
