# Asynchronous Processing: Callbacks, Promises, Async/Await
In this Section we'll look at Asynchronous Processing using Callbacks, Promises, and Async/Await.


## Node.js Event Loop

### Call Stack (V8 JS Engine) 
- Data Structure that tracks program execution
- Events to be executed are added (pushed) to the top of the Call Stack
- Events are removed (popped) from the top of the Call Stack when execution is complete
- Events execute one at a time
- Events at the bottom of the Call Stack can't be removed until the Commands above them have completed execution and have been removed


### Node API Event Queue (native Node APIs)
- Registers Events to be executed

Example:
```
setTimeout(() => {
    console.log('Executing Callback funct.');
}, 3000); // 3 sec delay
```

- setTimeout() is moved to the Node API Event Queue
- setTimeout() begins counting down it's wait duration (3 sec)

IMPORTANT: Call Stack events are still processing while countdown is waiting!

- When setTimeout() countdown ends, the process is moved from the Node API Event Queue to the CallBack Queue to be executed

IMPORTANT: The CallBack is not execute at this time, it is just placed in the Queue to be executed!


### CallBack Queue
- Registers all CallBack Functions ready to be executed (moved from Node API Event Queue)
- Functions in the CallBack Queue are not executed until the Call Stack is empty


## Useful link(s)
* [The Node.js Event Loop](hhttps://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
* [request](https://www.npmjs.com/package/request)
* [axios](https://www.npmjs.com/package/axios/)
