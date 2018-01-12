# Development Environment Configuration

### These instructions are for macOS.

## Installation Options

+ [Manual Installation](#manual)
+ [Homebrew](#brew)


<a id="manual"></a>
## Manual Installation 
### Install Node & npm
+ Download [Node.js](https://nodejs.org/en/)
+ Run Installer (take defaults)
+ Execute the following in Terminal to test
```
$ node -v
v9.3.0

$ npm -v
5.6.0
```

### Install MongoDB
+ Download [MongoDB](https://www.mongodb.com/)
+ Extract package
+ Remame directory (folder) to mongo
+ Move mongo dir to your Home dir (~)
+ Edit .bash_profile (or create if file doesn't exist) in your Home dir and set PATH as follows
```
export PATH=$HOME/mongo/bin:$PATH
```
+ Create data/db dir structure in your Home dir
+ Open Terminal and execute the following to test
```
$ mongo --version
MongoDB shell version v3.6.0
git version: a57d8e71e6998a2d0afde7edc11bd23e5661c915
OpenSSL version: OpenSSL 1.0.2n  7 Dec 2017
allocator: system
modules: none
build environment:
    distarch: x86_64
    target_arch: x86_64
```

### Install Robo 3T
+ [link](#robo)


<a id="brew"></a>
## Homebrew Installation
### Install Homebrew (execute in Terminal)
```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew update
$ brew doctor
$ brew -v
Homebrew 1.4.1
Homebrew/homebrew-core (git revision 4df7; last commit 2017-12-24)
$ brew list
```

### Install Node & npm
```
$ brew install node
$ node -v
v9.3.0

$ npm -v
5.6.0
```

### Install MongoDB
```
$ brew install mongodb
$ mongo --version
MongoDB shell version v3.6.0
git version: a57d8e71e6998a2d0afde7edc11bd23e5661c915
OpenSSL version: OpenSSL 1.0.2n  7 Dec 2017
allocator: system
modules: none
build environment:
    distarch: x86_64
    target_arch: x86_64
```

### Default Mongo locations (Brew Install)
+ DBs: /usr/local/var/mongodb/ directory
+ mongod.conf: /usr/local/etc/mongod.conf
+ logs: /usr/local/var/log/mongodb/
+ binaries: /usr/local/Cellar/mongodb/[version]/bin


### Install Robo 3T
+ [link](#robo)

<a id="robo"></a>
## Robo 3T (formery Robomongo) Installation
+ [Download](https://robomongo.org/) and install
