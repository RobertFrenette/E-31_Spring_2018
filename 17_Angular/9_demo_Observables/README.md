# Angular Observables

Although we already saw an example of an observable in mountain.component.ts in the [Angular Routing Section](https://github.com/RobertFrenette/E-31_Spring_2018/tree/master/17_Angular/8_demo_Router), we'll take a deeper dive here, including connecting to a Node Server to get data!

## For Reference
### mountain.component.ts
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

## Create App
+ Generate a new Angular App
+ Generate "home", "login" and "dashboard" Components
+ Install Bootstrap and include in .angular-cli.json Styles
+ Include the FormsModule in app.module.ts
+ Change the title propery value to 'Mountains' in app.component.ts

## Add Routes
### app.module.ts
```
	import { Routes, RouterModule }  from '@angular/router';

	// ...

	const appRoutes: Routes = [
		{path: '', component: HomeComponent},
		{path: 'login', component: LoginComponent},
		{path: 'dashboard', component: DashboardComponent}
	];

	// ...

	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(appRoutes)
	],
```

## Add router-outlet
### app.component.html
```
	<div class="container">
	  <h1>{{title}}</h1>

	  <router-outlet></router-outlet>
	</div>
```

## Modify App
### home.component.html
```
	<div class="jumbotron">
	  <h1 class="display-4">Home</h1>
	  <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis dictum urna ac faucibus. Curabitur venenatis diam id elit pharetra, in suscipit metus dictum. Praesent quis auctor ipsum. Aliquam accumsan dignissim nibh, quis faucibus erat. Suspendisse gravida, libero vel molestie tincidunt, magna velit scelerisque tellus, vitae ullamcorper metus ipsum ut ipsum. Maecenas faucibus mauris sit amet lorem ullamcorper aliquam a sollicitudin tellus.</p>
	  <hr class="my-4">
	  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	  <p class="lead">
	    <button type="button" class="btn btn-primary" (click)="navigateToLogin()">Login</button>
	  </p>
	</div>
```


### home.component.ts
```
	import { Router } from '@angular/router';

	// ...

	constructor(private router: Router) {}

	// ...

	navigateToLogin(): void {
		this.router.navigate(['login']);
	}
```

### login.component.html
```
	<div class="container">
		<hr />
		<h3><span class="pull-right"><button type="button" class="btn btn-primary" (click)="navigateHome()">Home</button></span></h3>
	</div>

	<div class="container">
		<h2>Login</h2>
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
				<strong>Error!</strong> {{errMsg}}
			</div>
		</div>
	</div>
```

### login.component.ts
```
    import { Router } from '@angular/router';
    
    // ...
    
    private userName: string = '';
    private password: string = '';
    private errMsg: string = '';
    private loginError: boolean = false;
    
    // ...
    
    constructor(private router: Router) {}
    
    // ...
    
	navigateHome(): void {
		this.router.navigate(['/']);
	}
  
	onLogin(): void {
		this.router.navigate(['dashboard'], {queryParams: {username: this.userName}});
	}
```

### dashboard.component.html
```
  <div class="container">
    <hr />
    <h3>User: {{userName}} <span class="pull-right"><button type="button" class="btn btn-primary" (click)="onLogout()">Logout</button></span>
  </h3>
  </div>

  <div class="container">
    <hr />
    <h3>Mountains</h3>
    <ul>
      <li *ngFor="let mountain of mountains">{{mountain.name}} - {{mountain.elev}}'. {{mountain.desc}}</li>
    </ul>
  </div>
```

### dashboard.component.ts
```
    import { Router, ActivatedRoute } from '@angular/router';
    
    // ...
    
    mountains: Array<string> = [];
    
    private sub: any;
    private userName: string = '';

    constructor(private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
      // get username from Query Params
      // Subscribe to Observable
      // pass anonymoue callback function to subscribe method
      this.sub = this.route
                .queryParams
                .subscribe(params => {
                  this.userName = params['username'];
                });
	}

    onLogout() {
      this.router.navigate(['/']);
    }
```

## Test App
When you run ```ng serve``` and load the App, your pages should look like the following (with Nav working)

### Home Page


![AngularJS](img/img_1.png?raw=true "AngularJS")


### Login Page


![AngularJS](img/img_2.png?raw=true "AngularJS")


### Dashboard Page


![AngularJS](img/img_3.png?raw=true "AngularJS")



## Create Model
+ In src/app/models, create mountain Model.
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


## Generate Services
+ In src/app/providers, generate auth and mountain Services.


### auth.service.ts
```
  import { Injectable } from '@angular/core';

  @Injectable()
  export class AuthService {
    constructor() { }

    login(userName: string, password: string): boolean {
      return true;
    }
  }
```


### mountain.service.ts
```
  import { Injectable } from '@angular/core';

  import { Mountain } from './../models/mountain.model';

  @Injectable()
  export class MountainService {

    mountains: Mountain[] = [];

    constructor() { }

    getMountains(): Array<any> {
      return this.mountains;
    }
  }
```

## Modify App
### login.component.ts
+ Import Auth Service
```
	import { AuthService } from './../providers/auth.service';
```

+ Modify Constructor
```
	constructor(private authService: AuthService, private router: Router) {}
```

+ Modify onLogin() method
```
  onLogin(): void {
    this.loginError = false;
    if (this.userName === '' || this.password === '') {
      this.errMsg = 'User Name and Password are required.';
      this.loginError = true;
    } else {
      // call login() method in AuthService to validate login creds
      this.authService.login(this.userName, this.password).subscribe(data => {
        console.log(data);
        if (data.length == 0) {
          this.errMsg = 'Login unsuccessful.';
          this.loginError = true;
        } else {
          this.loginError = false;
          // load mountains "page"
          this.router.navigate(['dashboard'], {queryParams: {userame: this.userName}});
        }
      });
    }
  }
```

### auth.service.ts
+ Add Imports
```
	import { Http, Headers, RequestOptions } from '@angular/http';
	import { Observable } from 'rxjs/Observable';
	import { Subject } from 'rxjs/Subject';
	import 'rxjs/add/operator/map';
	import 'rxjs/add/observable/of';
```

+ Add properties
```
	private usersEndpoint: string = 'http://localhost:3000/login/';
	private headers = new Headers({ 'Content-Type': 'application/json' });
	private options = new RequestOptions({ headers: this.headers });
```

+ Modify constructor
```
	constructor(private http: Http) {}
```

+ Modify login()
```
  login(userName: string, password: string) : Observable<any> {
    return this.http.post(this.usersEndpoint, {user_name : userName, user_password : password}, this.options)
      .map(res => <any[]>res.json());
  }
```


### app.module.ts
+ Add Import
```
	import { HttpModule } from '@angular/http';
```

+ Add HttpModule to imports Array
```
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	  RouterModule.forRoot(appRoutes)
  ],
```


## Create Node / Express Server
+ In a Terminal
```
$ mkdir demo_server
$ cd demo_server
$ npm init
$ npm install express body-parser --save
```

+ Crete server.js file in demo_Server dir
```
  const express = require('express');
  const bodyParser = require('body-parser');

  const app = express();
  app.use(bodyParser.json());

  // Hard-Coded for demo
  const USER_NAME = 'Admin';
  const PASSWORD = 'password';

  app.post('/login', (req, res) => {
  if (req.body.user_name === USER_NAME && req.body.user_password === PASSWORD) {
      res.json({ success: true }); 
    } else {
      res.json({ success: false });
    }
  });

  app.listen(3000, () =>{
     console.log('Server running on port 3000.'); 
  });
```

+ In a Terminal
```
$ npm start
 ...
 Server running on port 3000.
```

## Test App
+ Ensure Node Server is running!

### Unsuccessful Test


![AngularJS](img/img_4.png?raw=true "AngularJS")


+ Entering proper User Name (Admin) and Password (password) should load the Dashboard page.



## Modify App
### dashboard.component.ts
+ Import Mountain Service
```
  import { MountainService } from './../providers/mountain.service';
```

+ Modify Constructor
```
  constructor(private mountainService: MountainService,
              private route: ActivatedRoute,
              private router: Router) {}
```

+ Modify ngOnInit()
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
              
    // call getMountains() method in MoutnainService
    this.mountainService.getMountains().subscribe(data => {
      this.mountains = data.mountains;
    });
  }
```

### mountain.service.ts
+ Add Imports
```
	import { Http, Headers, RequestOptions } from '@angular/http';
	import { Observable } from 'rxjs/Observable';
	import { Subject } from 'rxjs/Subject';
	import 'rxjs/add/operator/map';
	import 'rxjs/add/observable/of';
```

+ Add properties
```
	private usersEndpoint: string = 'http://localhost:3000/mountains/';
	private headers = new Headers({ 'Content-Type': 'application/json' });
	private options = new RequestOptions({ headers: this.headers });
```

+ Modify constructor
```
	constructor(private http: Http) {}
```

+ Modify login()
```
  login(userName: string, password: string) : Observable<any> {
    return this.http.post(this.usersEndpoint, this.options)
      .map(res => <any[]>res.json());
  }
}
```


## Modify Node / Express Server
### server.js
+ Add the following const
```
const MOUNTAINS = [
                    {
                      name: 'Mt. Washington',
                      elev: 6288,
                      desc: 'Mt. Washington is the highest peak east of the Mississippi River and north of the Carolinas.'
                    },
                    {
                      name: 'Mt. Adams',
                      elev: 5799,
                      desc: 'Mt. Adams is the second highest peak in New England, offering spectacular views across the Great Gulf and King Ravine.'
                    },
                    {
                      name: 'Mt. Jefferson',
                      elev: 5716,
                      desc: 'Mt. Jefferson has three summits a short distance apart, in line northwest and southeast, with the highest in the middle.'
                    }
                  ];
```

+ Add the following route
```
  app.get('/mountains', (req, res) => {
    res.json({mountains: MOUNTAINS});
  });
```

## Test Route

### Launch in Browser (or makes GET request  in Postman)
[http://localhost:3000/mountains](http://localhost:3000/mountains)

```
{
mountains: [
{
name: "Mt. Washington",
elev: 6288,
desc: "Mt. Washington is the highest peak east of the Mississippi River and north of the Carolinas."
},
{
nane: "Mt. Adams",
elev: 5799,
desc: "Mt. Adams is the second highest peak in New England, offering spectacular views across the Great Gulf and King Ravine."
},
{
nane: "Mt. Jefferson",
elev: 5716,
desc: "Mt. Jefferson has three summits a short distance apart, in line northwest and southeast, with the highest in the middle."
}
]
}
```


## Test in App
+ Ensure Node Server is running!


![AngularJS](img/img_5.png?raw=true "AngularJS")

