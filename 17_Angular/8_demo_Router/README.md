# Angular Router

## Create App
Start with App created in Section [7_demo_Services](https://github.com/RobertFrenette/E-31_Spring_2018/tree/master/17_Angular/7_demo_Services).

## Modify App


### app.module.ts
+ Add the following import
```
  import { Routes, RouterModule }  from '@angular/router';
```

+ Add the following code between the last import statement and the @NgModule decorator
```
  const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'mountains', component: MountainComponent}
  ];
```

+ And add the RouterModule to the imports Array
```
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
```


### app.component.html
+ Replace the existing code with the following
```
  <div class="container">
    <h1>{{title}}</h1>

    <!-- this is where the "pages" will be displayed -->
    <router-outlet></router-outlet>

    <app-footer></app-footer>
  </div>
```


### login.component.ts
+ Add the following import
```
  import { Router } from '@angular/router';
```

+ Modify the constructor
```
  constructor(private authService: AuthService, private router: Router) {}
```

+ Replace the current onLogin() method with the following
```
  onLogin(): void {
    // call login() method in AuthService to validate login creds
    if (this.authService.login(this.userName, this.password)) {
      this.loginError = false;
      // load mountains "page"
      this.router.navigate(['mountains']);
    } else {
      this.loginError = true;
    }
  }
```


## Load App
```
$ cd demo
$ ng serve
```

[http://localhost:4200/](http://localhost:4200/)


When the App loads, you should see the Login form.


![AngularJS](img/img_1.png?raw=true "AngularJS")


An unsuccessful login will display an error message.


![AngularJS](img/img_2.png?raw=true "AngularJS")


And a successful login will display the Mountains.


![AngularJS](img/img_3.png?raw=true "AngularJS")


## Modify App

### login.component.ts
+ Change the router.navigate to the following
```
  this.router.navigate(['mountains'], {queryParams: {username: this.userName}});
```


### mountain.component.ts
+ Import Router
```
  import { Router, ActivatedRoute } from '@angular/router';
```

+ Modify the constructor
```
  constructor(private mountainService: MountainService,
              private route: ActivatedRoute,
              private router: Router) {}
```

+ Add the following properties
```
sub: any;
userName: string = '';
```

+ Change ngOnInit() to the following
```
  ngOnInit() {
    // get username from Query Params
    // Subscribe to Observable
    // pass anonymoue callback function to subscribe method
    this.sub = this.route
              .queryParams
              .subscribe(params => {
                this.userName = params['username'];
              });
    
    this.mountains = this.mountainService.getMountains();
  }
```

+ Add an onLogout() method
```
  onLogout() {
    this.router.navigate(['/']);
  }
```


### mountain.component.html
+ Add the following div at the top of the page
```
  <div class="container">
    <hr />
    <h3>User: {{userName}} <span class="pull-right"><button type="button" class="btn btn-primary" (click)="onLogout()">Logout</button></span></h3>
  </div>
```


The UseName and a Logout button are now displayed on the Mountains page.


![AngularJS](img/img_4.png?raw=true "AngularJS")
