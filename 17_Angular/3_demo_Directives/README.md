# Angular Event Binding

## Create App
Start with App created in Section [2_demo_Event_Binding](https://github.com/RobertFrenette/E-31_Spring_2018/tree/master/17_Angular/2_demo_Event_Binding).


## Load App
```
$ cd demo
$ ng serve
...
webpack: Compiled successfully.
$
```

[http://localhost:4200/](http://localhost:4200/)


## Modify App (Structural Directive)

+ Open app.component.ts and add the following property

```
  newMountainAdded: boolean = false;
```

+ then set the property to true at the end of the onAddMountain() method
```
  this.newMountainAdded = true;
```

+ and set the property to false at the end of the onReset() method
```
  this.newMountainAdded = false;
```

+ Open app.component.html and modify the div with an id="mountainsDiv" to the following

```
  <!-- Built-in structural (changes structure of DOM) *ngIf Directive: conditional expression returns true/false -->
  <div class="container" id="mountainsDiv" *ngIf="newMountainAdded">
```

When you load the page in the Browser, the mountainsDiv is no longer displayed by default.


![AngularJS](img/img_1.png?raw=true "AngularJS")


However, when you add a Mountain, the div is displayed.


![AngularJS](img/img_2.png?raw=true "AngularJS")


+ Add the following code between the div with id="mountainsDiv" and the div containing the footer
```
  <!-- Create ng-template with local reference #  to conditinally display -->
  <ng-template #noMountains>
    <div class="container">
        <hr />
        <h3>No Mountains Added.</h3>
    </div>
  </ng-template>
```

+ then modify the mountainsDiv to the following
```
<div class="container" id="mountainsDiv" *ngIf="newMountainAdded; else noMountains">
```

Now when you load the page, you will see a "No Mountains Added" message by default.


![AngularJS](img/img_3.png?raw=true "AngularJS")


Then the usual Mountain list when you add a Mountain.


![AngularJS](img/img_4.png?raw=true "AngularJS")


## Modify App (Attribute Directive)

+ In app.component.html, refactor the mountainsDiv and ng-template to the following

```
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
```

Note the ```<h3 [ngStyle]="{color: getColor()}">Mountains</h3>``` in the code above.

+ In app.component.ts, add the following method
```
  getColor(): string {
    return this.newMountainAdded === true ? '#000080' : '#FF0000'; // navy : red
  }
```


Now the Mountains header will display in red if no Mountains have been added.

![AngularJS](img/img_5.png?raw=true "AngularJS")


And the header will change to navy when a Mountain is added.


![AngularJS](img/img_6.png?raw=true "AngularJS")