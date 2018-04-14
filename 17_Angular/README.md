# Angular
In this Section we'll install the Angluar CLI and generate a new Project.

## Install Angular CLI
```
npm install -g @angular/cli@latest
```

![Install](img/angular_cli.png?raw=true "Install")


## Create a new Angular App
```
$ ng new demo
  create demo/README.md (1020 bytes)
  ...
  added 1374 packages from 1250 contributors in 137.427s
  Project 'demo' successfully created.
$ 
```

## Run App
```
$ cd demo
$ ng serve
** NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
Date: 2018-04-04T22:09:52.055Z                                                          
Hash: c0e84f6e3ca4b433a2a6
Time: 9681ms
chunk {inline} inline.bundle.js (inline) 3.85 kB [entry] [rendered]
chunk {main} main.bundle.js (main) 17.9 kB [initial] [rendered]
chunk {polyfills} polyfills.bundle.js (polyfills) 554 kB [initial] [rendered]
chunk {styles} styles.bundle.js (styles) 41.5 kB [initial] [rendered]
chunk {vendor} vendor.bundle.js (vendor) 7.42 MB [initial] [rendered]

webpack: Compiled successfully.
```

## Load App
[http://localhost:4200/](http://localhost:4200/)

![Launch](img/angular_app.png?raw=true "Launch")

