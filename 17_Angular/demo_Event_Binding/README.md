# Angular Event Binding

## Create App
Start with App created in Section [demo_Data_Binding](https://github.com/RobertFrenette/E-31_Spring_2018/tree/master/17_Angular/demo_Data_Binding).


## Load App
```
$ cd demo
$ ng serve
...
webpack: Compiled successfully.
$
```

[http://localhost:4200/](http://localhost:4200/)


## Modify App

+ Open src/app/app.component.ts and add the following method

```
  // executed when the Reset button is clicked
  onReset(): void {
    this.mountainName = '';
    this.mountainElevation = '';
    this.mountainDescription = '';
  }
```


+ Open src/app/app.component.html and add a new Button below the existing Add Mountain button

```
    <!-- Event Binding: ( ) -->
    <button type="button" class="btn btn-default" (click)="onReset()">Clear</button>
```

Load the page in the Browser, enter Mountain info, then click the Clear button.


+ In app.component.html, modify the existing Add Mountain button to the following, adding a click event handler
```
  <button type="button" class="btn btn-primary" [disabled]="addNewMountains" (click)="addNewMountains()">Add Mountain</button>
```

+ and change the String Interpolation line to the following
```
  {{newMountain}}
```

+ In app.component.ts, create a newMoutain property
```
  newMountain: string = '';
```

+ and create an onAddMountain() method
```
  // executed when Add Mountain is clicked
  onAddMountain(): void {
    this.newMountain = `${this.mountainName} - ${this.mountainElevation}' <br />${this.mountainDescription}`;
    this.addNewMountains = true;
  }
```

+ then set the addNewMountains property to false at the end of the onReset() method
```
  onReset(): void {
    this.mountainName = '';
    this.mountainElevation = '';
    this.mountainDescription = '';
    this.addNewMountains = false;
  }
```

In your Browser:
+ Add enter Mountain information, then click the Add Mountain button.

This will add the Mountain to the page and disable the Add Mountain button.


![AngularJS](img/img_1.png?raw=true "AngularJS")


+ Click the Clear Button to reset the form fields and enable the Add Mountain button.


![AngularJS](img/img_2.png?raw=true "AngularJS")
