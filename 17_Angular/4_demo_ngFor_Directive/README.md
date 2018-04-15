# Angular ngFor Directive

## Create App
Note: Since the App code we've used in the previous Sections would require quite a bit of modification to implement 
this new functionality, we'll create a new Project. Do refer back to the previous Sections if you have questions on 
the following setup steps.

```
$ ng new demo
...
Project 'demo' successfully created.
$ cd demo
$ npm install bootstrap --save
```

+ Modify .angular-cli.json to include Bootstrap styles
+ Include the FormsModule in app.module.ts
+ Replace the default code in app.component.ts with the following
```
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
  
  newMountainAdded: boolean = false;
  
  newMountain: string = '';
  
  // executed when Add Mountain is clicked
  onAddMountain(): void {
    this.newMountain = `${this.mountainName} - ${this.mountainElevation}'. ${this.mountainDescription}`;
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
```

+ Replace the default code in app.component.html with the following
```
<div class="container">
  <h1>{{title}}</h1>
  
  <div class="container">
    <div class="form-group">
      <label for="mountainName">Mountain Name</label>
      <input type="text" class="form-control" id="mountainName" placeholder="Enter a Mountain Name"required autofocus [(ngModel)]="mountainName" />
    </div>
    <div class="form-group">
      <label for="mountainElevation">Elevation</label>
      <input type="text" class="form-control" id="mountainElevation" placeholder="Elevation" required [(ngModel)]="mountainElevation" />
    </div>
    <div class="form-group">
      <label for="mountainDescription">Description</label>
      <input type="text" class="form-control" id="mountainDescription" placeholder="(optional)" [(ngModel)]="mountainDescription" />
    </div>
    <!-- Property Binding: [ ] -->
    <button type="button" class="btn btn-primary" (click)="onAddMountain()">Add Mountain</button>
    <!-- Event Binding: ( ) -->
    <button type="button" class="btn btn-default" (click)="onReset()">Clear</button>
  </div>
  <!-- Built-in structural (changes structure of DOM) *ngIf Directive: conditional expression returns true/false -->
  <div class="container" id="mountainsDiv">
      <hr />
      <!-- Built-in ngStyle attribute directive: uses Property Binding [ ] to bind to a property of the directive -->
      <h3 [ngStyle]="{color: getColor()}">Mountains</h3>
      <div *ngIf="newMountainAdded; else noMountains">
        <!--
          String Interpolation: Whatever is evaluated in the TypeScript expression inside the String Interpolation braces {{ }} resolves to a String.
          {{ TypeScript_Expression }} => result is a String
        -->
        {{newMountain}}
      </div>
      <!-- Create ng-template with local reference (#) to conditinally display -->
      <ng-template #noMountains>No Mountains Added.</ng-template>
  </div>
  
  <div class="container">
    <hr />
    <!-- Even though currentYear is defiuned as type number in app.component.ts, it resolves to a string -->
    <!--<footer class="pull-right">&copy; {{currentYear}}</footer>-->
    <!-- Make call to method to get year -->
    <footer class="pull-right">&copy; {{getCurrentYear()}}</footer>
  </div>
</div>
```



## Load App
```
$ cd demo
$ ng serve
...
$
```

[http://localhost:4200/](http://localhost:4200/)


Note the App should function as in previous Sections, with the notable exception being that the "Add Mountain" button is never disabled.


## Modify App

+ In app.component.ts, delete the newMountain property, and create a new mountains Array
```
  mountains: Array<string> = [];
```

+ Also, replace the following line in the onAddMountain() method
```
  this.newMountain = `${this.mountainName} - ${this.mountainElevation}'. ${this.mountainDescription}`;
```

+ with the following
```
  this.mountains.push(`${this.mountainName} - ${this.mountainElevation}'. ${this.mountainDescription}`);
```


+ In app.module.html, replace the following
```
  {{newMountain}}
```

+ with the following
```
  <!-- Built-in *ngFor directive -->
  <p *ngFor="let mountain of mountains">{{mountain}}</p>
```

+ When the page loads, it will look the same as in the prior Sections.
+ But when you add new Mountains, they will be displayed on the page.

![AngularJS](img/img_1.png?raw=true "AngularJS")
