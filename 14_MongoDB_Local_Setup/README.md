# MongoDB - local setup

IMPORTANT: We will be using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for our DB in the Course!  This Section is an "advanced topic" which is not officially part of the course. I'm presenting it as an example for those who wish to install Mongo on their Dev machine. If you are looking for the Section content on MongoDB Atlas, please see [Section 14_MongoDB_MongoDBAtlas](https://github.com/RobertFrenette/E-31_Spring_2018/tree/master/14_MongoDB_MongoDBAtlas).

Note: See [00_Dev_Environment_Config Section content](https://github.com/RobertFrenette/E-31_Spring_2018/tree/master/00_Dev_Environment_Config) to install / configure MongoDB on your Local Machine prior to continuing on with this content.


## MongoDB DB Setup
+ Open a Terminal
+ Start MongoDB
```
$ cd ~
$ mongod --dbpath ~/data/db
2017-12-26T11:51:50.403-0500 I CONTROL  [initandlisten] MongoDB starting : pid=1925 port=27017 dbpath=/Users/rob/data/db 64-bit host=Roberts-Mac-mini.local
2017-12-26T11:51:50.404-0500 I CONTROL  [initandlisten] db version v3.6.0
2017-12-26T11:51:50.404-0500 I CONTROL  [initandlisten] git version: a57d8e71e6998a2d0afde7edc11bd23e5661c915
2017-12-26T11:51:50.404-0500 I CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.0.2n  7 Dec 2017
2017-12-26T11:51:50.404-0500 I CONTROL  [initandlisten] allocator: system
2017-12-26T11:51:50.404-0500 I CONTROL  [initandlisten] modules: none
2017-12-26T11:51:50.404-0500 I CONTROL  [initandlisten] build environment:
2017-12-26T11:51:50.404-0500 I CONTROL  [initandlisten]     distarch: x86_64
2017-12-26T11:51:50.404-0500 I CONTROL  [initandlisten]     target_arch: x86_64
2017-12-26T11:51:50.404-0500 I CONTROL  [initandlisten] options: { storage: { dbPath: "/Users/rob/data/db" } }
2017-12-26T11:51:50.416-0500 I -        [initandlisten] Detected data files in /Users/rob/data/db created by the 'wiredTiger' storage engine, so setting the active storage engine to 'wiredTiger'.
2017-12-26T11:51:50.417-0500 I STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=3584M,session_max=20000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,archive=true,path=journal,compressor=snappy),file_manager=(close_idle_time=100000),statistics_log=(wait=0),verbose=(recovery_progress),
2017-12-26T11:51:54.282-0500 I STORAGE  [initandlisten] WiredTiger message [1514307114:282410][1925:0x7fffb6986340], txn-recover: Main recovery loop: starting at 2/105088
2017-12-26T11:51:54.391-0500 I STORAGE  [initandlisten] WiredTiger message [1514307114:391170][1925:0x7fffb6986340], txn-recover: Recovering log 2 through 3
2017-12-26T11:51:54.487-0500 I STORAGE  [initandlisten] WiredTiger message [1514307114:487068][1925:0x7fffb6986340], txn-recover: Recovering log 3 through 3
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] 
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] 
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] ** WARNING: This server is bound to localhost.
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] **          Remote systems will be unable to connect to this server. 
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] **          Start the server with --bind_ip <address> to specify which IP 
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] **          addresses it should serve responses from, or with --bind_ip_all to
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] **          bind to all interfaces. If this behavior is desired, start the
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] **          server with --bind_ip 127.0.0.1 to disable this warning.
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] 
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] 
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
2017-12-26T11:51:57.238-0500 I FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory '/Users/rob/data/db/diagnostic.data'
2017-12-26T11:51:57.239-0500 I NETWORK  [initandlisten] waiting for connections on port 27017
```

## Test DB
+ Open a new Terminal
+ Connect to DB
```
$ mongo
MongoDB shell version v3.6.0
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.0
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
	http://docs.mongodb.org/
Questions? Try the support group
	http://groups.google.com/group/mongodb-user
Server has startup warnings: 
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] 
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] 
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] ** WARNING: This server is bound to localhost.
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] **          Remote systems will be unable to connect to this server. 
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] **          Start the server with --bind_ip <address> to specify which IP 
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] **          addresses it should serve responses from, or with --bind_ip_all to
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] **          bind to all interfaces. If this behavior is desired, start the
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] **          server with --bind_ip 127.0.0.1 to disable this warning.
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] 
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] 
2017-12-26T11:51:56.843-0500 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
2017-12-26T12:16:47.824-0500 E -        [main] Error loading history file: FileOpenFailed: Unable to fopen() file /Users/rob/.dbshell: No such file or directory
> 
```

+ Insert into DB
```
> db.Mountains.insert({mountainName: 'Mt. Washington', mountainElevation: '6,288'})
WriteResult({ "nInserted" : 1 })
```


+ Select from DB
```
> db.Mountains.find()
{ "_id" : ObjectId("5a4284701d38720a0cf94e63"), "mountainName" : "Mt. Washington", "mountainElevation" : "6,288" }
> 
```

+ Exit
```
> ^C
bye
$
```


## Launch Robo 3T
+ Launch Robo 3T (formery Robomongo)
+ Create New Connection

![Robo 3T](img/0_create_robo_connection.png?raw=true "Robo 3T")


+ Open Connection

![Robo 3T](img/1_connect_to_mongo.png?raw=true "Robo 3T")


+ View Collection

![Robo 3T](img/2_view_collection.png?raw=true "Robo 3T")



## App Setup
+ Open a new Terminal
+ Create a working dir and run ```npm init```


## Install Modules
```
$ npm install mongodb --save
```

### Test App(s)
See src in demo dir for examples

Note: Ensure MongoDB is running before executing Apps

#### Connect and Insert
```
$ node 0_mongodb_connect_and_insert.js 
Connected to DB.
[
  {
    "mountainName": "Mt. Washington",
    "mountainElevation": "6,288",
    "_id": "5a428e4987c400082be09a6b"
  }
]
```

![Robo 3T](img/results_0.png?raw=true "Robo 3T")


#### Select
```
$ node 1_mongodb_find.js 
Connected to DB.
Mountains:
[
  {
    "_id": "5a428e7bae5cdb08315d2ba5",
    "mountainName": "Mt. Washington",
    "mountainElevation": "6,288"
  }
]
Mountains:
[
  {
    "_id": "5a428e7bae5cdb08315d2ba5",
    "mountainName": "Mt. Washington",
    "mountainElevation": "6,288"
  }
]
Mountains:
[
  {
    "_id": "5a428e7bae5cdb08315d2ba5",
    "mountainName": "Mt. Washington",
    "mountainElevation": "6,288"
  }
]
Mountains count: 1.
```


#### Update
```
$ node 2_mongodb_update.js 
Connected to DB.
{ lastErrorObject: { n: 1, updatedExisting: true },
  value: 
   { _id: 5a428e7bae5cdb08315d2ba5,
     mountainName: 'Mt. Washington',
     mountainElevation: '0,000' },
  ok: 1 }
```


#### Delete
```
$ node 3_mongodb_delete.js 
Connected to DB.
{ lastErrorObject: { n: 1 },
  value: 
   { _id: 5a428e7bae5cdb08315d2ba5,
     mountainName: 'Mt. Washington',
     mountainElevation: '0,000' },
  ok: 1 }

```

![Robo 3T](img/results_1.png?raw=true "Robo 3T")


## Useful link(s)
* [MongoDB Node.js Driver npm](https://github.com/mongodb/node-mongodb-native)
