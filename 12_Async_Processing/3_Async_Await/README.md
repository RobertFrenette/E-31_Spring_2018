# Asynchronous Processing: Async/Await
In this Section we'll look at Asynchronous Processing using Async/Await.

### Setup (app.js)
- Replace YOUR_API_KEY in the apiKey const below with your GMaps API Key
```
const apiKey = 'YOUR_API_KEY';
```

### Execute in Terminal (Test 1)
app.js

```
// Define Async Function
async function getAddress(address) {
    try {
        // 1. Call funct with returns a Promise
        var theAddress =  JSON.stringify(getDataForAddress(address));

        // 2. Call funct with returns a Promise using Await
        //var theAddress = await getDataForAddress(address);
        
        console.log(`Address Response: ${theAddress}`);
    } catch(err) {
        console.log(`Error: ${err}`);
    }
}
```

Execute
```
$ node app
Entering App...
Address Response: {}
Done!
Address in getDataForAddress(): {formatted_address: 18 Brattle St, Cambridge, MA 02138, USA, lat: 42.3735756, lng: -71.1189729}
```


### Execute in Terminal (Test 2)
app.js

```
// Define Async Function
async function getAddress(address) {
    try {
        // 1. Call funct with returns a Promise
        //var theAddress =  JSON.stringify(getDataForAddress(address));

        // 2. Call funct with returns a Promise using Await
        var theAddress = await getDataForAddress(address);
        
        console.log(`Address Response: ${theAddress}`);
    } catch(err) {
        console.log(`Error: ${err}`);
    }
}
```

Execute
```
$ node app
Entering App...
Done!
Address in getDataForAddress(): {formatted_address: 18 Brattle St, Cambridge, MA 02138, USA, lat: 42.3735756, lng: -71.1189729}
Address Response: {formatted_address: 18 Brattle St, Cambridge, MA 02138, USA, lat: 42.3735756, lng: -71.1189729}
```
