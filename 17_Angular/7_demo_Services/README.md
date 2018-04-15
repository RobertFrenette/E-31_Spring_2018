# Angular Services

## Create App
Start with App created in Section [5_demo_Components](https://github.com/RobertFrenette/E-31_Spring_2018/tree/master/17_Angular/5_demo_Components).

## Generate a Login Service
+ Execute the following in a Terminal in the root dir of your Project
```
ng generate service providers/auth
```

This creates a new auth.servcie.

+ Examine the generated code in auth.services.ts, then add the following properties
```
  // Hard-coded for demo purposes
  USER_NAME: string = 'Admin';
  PASSWORD: string = 'password';
```

+ And add the following method
```
  login(userName: string, password: string) {
    if (userName === this.USER_NAME && password === this.PASSWORD) {
      console.log('AuthService: Login successful!');
      return  true;
    } else {
      console.log('AuthService: Login failed!');
      return false;
    }
  }
```


## Modify App


### app.module.ts
+ Import the Auth Service
```
  import { AuthService } from './providers/auth.service';
```

+ And add it to the providers array
```
  providers: [AuthService],
```


### login.component.ts
+ Import the Auth Service
```
  import { AuthService } from './../providers/auth.service';
```

+ Modify the constructor function to the following
```
  // create instance of AuthService
  constructor(private authService: AuthService) {}
```

+ Delete the following properties
```
  // Hard-coded for demo purposes
  USER_NAME: string = 'Admin';
  PASSWORD: string = 'password';
```

+ And change the following line in the onLogin() method
```
  if (this.userName === this.USER_NAME && this.password === this.PASSWORD) {
```

+ to the following
```
  // call login() method in AuthService to validate login creds
  if (this.authService.login(this.userName, this.password)) {
```


## Load App
```
$ cd demo
$ ng serve
```

[http://localhost:4200/](http://localhost:4200/)


The App should function as previously, but now uses the AuthService to validate the user credentials. You can see the call to AuthSetvice is being made by looking at the message(s) in the Cosole.


![AngularJS](img/img_1.png?raw=true "AngularJS")

![AngularJS](img/img_2.png?raw=true "AngularJS")


## Generate a Mountain Service
+ Execute the following in a Terminal in the root dir of your Project
```
ng generate service providers/mountain
```

+ Examine the generated code in mountain.services.ts, then add the following property
```
  mountains: Array<any>  = [
                {
                  name: "Mt. Washington",
                  elev: 6288,
                  desc: "Mt. Washington is the highest peak east of the Mississippi River and north of the Carolinas."
                },
                {
                  name: "Mt. Adams",
                  elev: 5799,
                  desc: "Mt. Adams is the second highest peak in New England, offering spectacular views across the Great Gulf and King Ravine."
                },
                {
                  name: "Mt. Jefferson",
                  elev: 5716,
                  desc: "Mt. Jefferson has three summits a short distance apart, in line northwest and southeast, with the highest in the middle."
                }
              ];
```

+ And add the following method
```
  getMountains(): Array<any> {
    return this.mountains;
  }
```


## Generate a Mountain Component
+ Execute the following in a Terminal in the root dir of your Project
```
ng g c mountain
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


### mountain.component.ts
+ Add the following
```
  import { MountainService } from './../providers/mountain.service';

  mountains: Array<string> = [];
    
  // create instance of MountainService
  constructor(private mountainService: MountainService) {}
    
  ngOnInit() {
      this.mountains = this.mountainService.getMountains();
  }
```


## Modify App


### app.module.ts
+ Import the Mountain Service
```
  import { AuthService } from './providers/auth.service';
  import { MountainService } from './providers/mountain.service';
```

+ And add it to the providers array
```
  providers: [
    AuthService,
    MountainService
  ],
```

### app.component.html
```
  <div class="container">
    <h1>{{title}}</h1>

    <app-login></app-login>

    <app-mountain></app-mountain>

    <app-footer></app-footer>
  </div>
```

When the page loads, you should see the Mountains displayed below the login form.


![AngularJS](img/img_3.png?raw=true "AngularJS")


## Create Mountain Model
+ Create a new dir named "models" in the src/app dir, then create a new file named mountain.model.ts and add the following code
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

### mountain.service.ts
+ Import the Mountain Model
```
  import { Mountain } from './../models/mountain.model';
```

+ Modify the mountains property as follows
```
  mountains: Mountain[] = [
    new Mountain('Mt. Washington', 6288, 'Mt. Washington is the highest peak east of the Mississippi River and north of the Carolinas.'),
    new Mountain('Mt. Adams', 5799, 'Mt. Adams is the second highest peak in New England, offering spectacular views across the Great Gulf and King Ravine.'),
    new Mountain('Mt. Jefferson', 5716, 'Mt. Jefferson has three summits a short distance apart, in line northwest and southeast, with the highest in the middle.'),
  ];
```

App should function as before, but now uses the Mountain Model.

![AngularJS](img/img_4.png?raw=true "AngularJS")