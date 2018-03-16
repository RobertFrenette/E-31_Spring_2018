# Asynchronous Processing: Callbacks
In this Section we'll look at Asynchronous Processing using Callbacks.

### Setup (app.js)
- Replace YOUR_API_KEY in the apiKey const below with your GMaps API Key
```
const apiKey = 'YOUR_API_KEY';
```

### Test in Terminal (Good URL)
- Ensure url property in options Object has a value of goodURL
```
var options = {
    url: goodURL,
    json: true
};
```

Execute:
```
$ node app
Entering App...
Done!
18 Brattle St, Cambridge, MA 02138, USA
{lat: 42.3735756, lng: -71.1189729}
```

### Test in Terminal (Bad URL)
- Ensure url property in options Object has a value of badURL
```
var options = {
    url: badURL,
    json: true
};
```

Execute:
```
$ node app
Entering App...
Done!
Error!
{
  "code": "ENOTFOUND",
  "errno": "ENOTFOUND",
  "syscall": "getaddrinfo",
  "hostname": "map.googleapi.com",
  "host": "map.googleapi.com",
  "port": 443
}
```
