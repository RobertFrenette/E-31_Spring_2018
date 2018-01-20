# NPM: Node Package Manager
npm is the package manager for JavaScript and the world’s largest software registry.

## Using npm

### Execute in Terminal
```
$ npm

Usage: npm <command>

where <command> is one of:
    access, adduser, bin, bugs, c, cache, completion, config,
    ddp, dedupe, deprecate, dist-tag, docs, doctor, edit,
    explore, get, help, help-search, i, init, install,
    install-test, it, link, list, ln, login, logout, ls,
    outdated, owner, pack, ping, prefix, profile, prune,
    publish, rb, rebuild, repo, restart, root, run, run-script,
    s, se, search, set, shrinkwrap, star, stars, start, stop, t,
    team, test, token, tst, un, uninstall, unpublish, unstar,
    up, update, v, version, view, whoami

npm <command> -h     quick help on <command>
npm -l           display full usage info
npm help <term>  search for help on <term>
npm help npm     involved overview

Specify configs in the ini-formatted file:
    /Users/rob/.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@5.6.0 /usr/local/lib/node_modules/npm
$ 
```

## Display Installed Modules
### Execute in Terminal
```
$ mkdir demo
$ cd demo
$ npm ls
/E-31_Spring_2018/02_NPM/demo
└── (empty)
$ 
```

## Install a Module
### Execute in Terminal (in demo dir)
```
$ npm install logger
npm WARN saveError ENOENT: no such file or directory, open '/Users/rob/development/E-31_Spring_2018/02_NPM/demo/package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open '/Users/rob/development/E-31_Spring_2018/02_NPM/demo/package.json'
npm WARN 02_NPM/demo No description
npm WARN 02_NPM/demo No repository field.
npm WARN 02_NPM/demo No README data
npm WARN 02_NPM/demo No license field.

+ logger@0.0.1
added 1 package in 1.342s

$ ls -al
total 16
drwxr-xr-x   5 rob  staff  170 Dec 23 08:09 .
drwxr-xr-x  11 rob  staff  374 Dec 23 07:58 ..
drwxr-xr-x   3 rob  staff  102 Dec 23 08:09 node_modules
-rw-r--r--   1 rob  staff  249 Dec 23 08:09 package-lock.json

$ npm ls
/E-31_Spring_2018/02_NPM/demo
└── logger@0.0.1
$
```

Note the node_modules folder was created above, and the logger Package was installed in it.

```
$ ls -al node_modules/
total 0
drwxr-xr-x  3 rob  staff  102 Dec 23 08:09 .
drwxr-xr-x  5 rob  staff  170 Dec 23 08:09 ..
drwxr-xr-x  5 rob  staff  170 Dec 23 08:09 logger
$
```

## Build an App
Note the following requires the data/data.json dir/file to be placed in the demo dir. You can find the data.json file in this repo.

+ create a file named app.js in the demo dir
+ Add the following code
```
  // node app.js

  // require Node's built-in Modules
  const os = require('os');
  const fs = require('fs');

  // require logger Module
  const logger = require('logger').createLogger('log.txt');

  let data = require('./data/data.json');
  let mountains = data.mountains;

  // Get user info from OS
  let user = os.userInfo();
  console.log(user);

  // Write to log
  logger.info(`App accessed by: ${user.username}!\n`);

  Number.prototype.format = function(){
     return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  mountains.forEach((mountain, index) => {
    fs.appendFileSync('mountains.txt', `${index + 1}: ${mountain.name}, ${mountain.elevation.format()}'\n`);
  }); 
```

## Run App
Execute the following in a Terminal:
```
$ node app.js
{ uid: 501,
  gid: 20,
  username: 'rob',
  homedir: '/Users/rob',
  shell: '/bin/bash' }

$ cat log.txt 
info [Wed Jan 17 2018 09:37:45 GMT-0500 (EST)]  App accessed by: rob!

$ cat mountains.txt 
1: Mt. Washington, 6,288'
2: Mt. Adams, 5,799'
3: Mt. Jefferson, 5,716'
...
48: Mt. Tecumseh, 4,003'
```

## Useful link(s)
* [npm repo](https://docs.npmjs.com/)
