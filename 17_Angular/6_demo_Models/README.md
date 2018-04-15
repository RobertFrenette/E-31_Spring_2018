# Angular Models

## Create App
We'll create a new Project in this Section. Do refer back to the previous Sections if you have questions on 
the following setup steps.

+ Generate a new app: ```ng new demo```
+ Install Bootstrap and include in .angular-cli.json Styles
+ Include the FormsModule in app.module.ts
+ Change the title propery value to 'Mountains' in app.component.ts
+ Replace the default code in app.component.html with the following
```
  <div class="container">
    <h1>{{title}}</h1>
  </div>
```

## Generate a Footer Component
```
ng g c footer
```

### footer.component.css
```
  footer {
    color: #808080;
    font-style: italic;
  }
```


### footer.component.html
```
  <div class="container">
    <hr />
    <footer class="pull-right">&copy; {{getCurrentYear()}}</footer>
  </div>
```


### footer.component.ts
```
  import { Component } from '@angular/core';

  // @Component Decorator
  @Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
  })
  export class FooterComponent {
    currentYear: number = 2018;

    getCurrentYear(): number {
      return this.currentYear;
    }
  }
```

## Generate a Mountain Component
```
ng g c mountain
```

## Create Mountain Model
+ In mountains Component dir, create a new file named mountain.model.ts


+ Add the following code to the Model
```
  // Create Mountain Model Class
  export class Mountain {
    // properties
    public name: string = '';
    public elev: number = 0;
    public desc: string = '';
    
    constructor(name: string, elev: number, desc: string) {
      this.name = name;
      this.elev = elev;
      this.desc = desc;
    }
  }
``` 



## Modify App


### mountain.component.ts
+ Import the Mountain Model
```
  import { Mountain } from './mountain.model';
```

+ Create the following property
```
  // Array to hold Mountain Objects
  mountains: Mountain[] = [
    new Mountain('Mt. Washington', 6288, 'Mt. Washington is the highest peak east of the Mississippi River and north of the Carolinas.'),
    new Mountain('Mt. Adams', 5799, 'Mt. Adams is the second highest peak in New England, offering spectacular views across the Great Gulf and King Ravine.'),
    new Mountain('Mt. Jefferson', 5716, 'Mt. Jefferson has three summits a short distance apart, in line northwest and southeast, with the highest in the middle.'),
  ];
```

### mountain.component.html
```
<div class="container">
  <hr />
  <h3>Mountains</h3>
  <ul>
    <li *ngFor="let mountain of mountains">{{mountain.name}} - {{mountain.elev}}'. {{mountain.desc}}</li>
  </ul>
</div>
```


## app.component.html
```
  <div class="container">
    <h1>{{title}}</h1>

    <app-mountain></app-mountain>

    <app-footer></app-footer>
  </div>
```


## Load App
```
$ cd demo
$ ng serve
```

[http://localhost:4200/](http://localhost:4200/)


![AngularJS](img/img_1.png?raw=true "AngularJS")