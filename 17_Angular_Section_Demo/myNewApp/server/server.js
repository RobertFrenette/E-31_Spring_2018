const express = require('express');

const app = express();

// enable CORS
// Since we're not serving page from Node, you'll get the following error if CORS isn't "enbaled"
// Failed to load http://localhost:3000/login/:
// No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Hard-Coded for demo
const MOUNTAINS = [
  {
    "name": "Mt. Washington",
    "img_src": "washington.jpg",
    "elevation": "6,288"
  },
  {
    "name": "Mt. Adams",
    "img_src": "adams.jpg",
    "elevation": "5,799"
  },
  {
    "name": "Mt. Jefferson",
    "img_src": "jefferson.jpg",
    "elevation": "5,716"
  }
];

app.get('/mountains', (req, res) => {
  res.json(MOUNTAINS);
});

app.listen(3000, () =>{
   console.log('Server running on port 3000.'); 
});
