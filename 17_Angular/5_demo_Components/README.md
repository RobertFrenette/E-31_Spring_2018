# Angular Components

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


## Load App
```
$ cd demo
$ ng serve
```

[http://localhost:4200/](http://localhost:4200/)


## Create Component (manually)

### Create Footer Component

+ In the Project's src/app dir, create a dir named "footer".
+ In the footer dir, create a file named footer.component.ts, a file named footer.component.html, and a file named footer.component.css.


#### footer.component.css
```
  footer {
    color: #808080;
    font-style: italic;
  }
```


#### footer.component.html
```
  <div class="container">
    <hr />
    <footer class="pull-right">&copy; {{getCurrentYear()}}</footer>
  </div>
```


#### footer.component.ts
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

## Modify App

## app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Note the import and declaration for FooterComponent.

## app.component.html
```
  <div class="container">
    <h1>{{title}}</h1>

    <app-footer></app-footer>
  </div>
```

When you load the page, the footer should be displayed.


![AngularJS](img/img_1.png?raw=true "AngularJS")



## Generate Component (using Angular CLI)

### Generate Login Component

+ In a terminal
```
$ cd src/app
$ ng generate component login
```

Examine the following files to see what Angular CLI has provided (as compared to the manual code written when creating the footer Component).

+ app.modules.ts
+ login.component.ts
+ login.component.html


### login.component.html
+ Replace the default code with the following
```
  <div class="container">
    <div class="form-group">
      <label for="userName">User Name</label>
      <input type="text" class="form-control" id="userName" placeholder="Enter your User Name"required autofocus [(ngModel)]="userName" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Enter your Password" [(ngModel)]="password" />
    </div>
    <button type="button" class="btn btn-primary" (click)="onLogin()">Login</button>
    <div *ngIf="loginError">
      <br />
      <div class="alert alert-danger">
        <strong>Error!</strong> Login unsuccessful.
      </div>
    </div>
  </div>
```


### login.component.ts
+ Add the following properties
```
  // Hard-coded for demo purposes
  USER_NAME: string = 'Admin';
  PASSWORD: string = 'password';
  
  userName: string = '';
  password: string = '';
  loginError: boolean = false;
```

+ Add the following method
```
  onLogin(): void {
    if (this.userName === this.USER_NAME && this.password === this.PASSWORD) {
      this.loginError = false;
    } else {
      this.loginError = true;
    }
  }
```


## Modify App

## app.component.html
```
<div class="container">
  <h1>{{title}}</h1>
  
  <app-login></app-login>
  
  <app-footer></app-footer>
</div>
```

When you load the page, the Login Form should be displayed. 

Attempt to login with bad creds, and you should see an error message.


![AngularJS](img/img_2.png?raw=true "AngularJS")
