# Event Emitter
In this Section we'll look at Node's built-in Event Emitter.


## Setup

### Execute in Terminal
```
$ mkdir demo
$ cd demo
$ npm init
...
Is this ok? (yes) yes
```

## Create Demo App

In your working dir, create the following files
+ app.js
+ subscriber_1.js
+ subscriber_2.js

View the files in the demo dir for code.

### Execute in Terminal
```
$ node app
Parent registering...
Subscriber_1 registering...
Parent: Name = FooBar, Msg = This is the first message.
Subscriber_1: Name = FooBar, Msg = This is the first message.

Subscriber_2 registering...
Parent: Name = BizBaz, Msg = This is the second message.
Subscriber_1: Name = BizBaz, Msg = This is the second message.
Subscriber_2: Name = BizBaz, Msg = This is the second message.
```

## Create Demo_Event_Emitter App
```
$ mkdir demo_event_emitter
$ cd demo_event_emitter
$ npm init
...
Is this ok? (yes) yes
```

View the files in the demo_event_emitter dir for code.

### Test
+ ```node server```
+ Load [http://127.0.0.1:3000/username?name=FooBar](http://127.0.0.1:3000/username?name=FooBar) in your Browser

```
$ node server
Server running on http://127.0.0.1:3000
Emitting userName Event
UserName Event emitted for: FooBar!
```

+ Load [http://127.0.0.1:3000/username?name=BizBaz](http://127.0.0.1:3000/username?name=BizBaz) in your Browser

```
Emitting userName Event
UserName Event emitted for: BizBaz!
```

## Create Demo_Streams App
```
$ mkdir demo_streams
$ cd demo_streams
$ npm init
...
Is this ok? (yes) yes
```

View the files in the demo_streams dir for code.

### Test
+ ```node server```
+ Open client/index.html in your Browser

![Screen Shot](img/screen_shot.png?raw=true "Screen Shot")
