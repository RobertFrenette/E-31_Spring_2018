const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

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
const USER_NAME = 'Admin';
const PASSWORD = 'password';
const MOUNTAINS = [
                    {
                      name: 'Mt. Washington',
                      elev: 6288,
                      desc: 'Mt. Washington is the highest peak east of the Mississippi River and north of the Carolinas.'
                    },
                    {
                      name: 'Mt. Adams',
                      elev: 5799,
                      desc: 'Mt. Adams is the second highest peak in New England, offering spectacular views across the Great Gulf and King Ravine.'
                    },
                    {
                      name: 'Mt. Jefferson',
                      elev: 5716,
                      desc: 'Mt. Jefferson has three summits a short distance apart, in line northwest and southeast, with the highest in the middle.'
                    }
                  ];

app.post('/login', (req, res) => {
  if (req.body.user_name === USER_NAME && req.body.user_password === PASSWORD) {
    res.json({ success: true }); 
  } else {
    res.json({ success: false });
  }
});

app.get('/mountains', (req, res) => {
  res.json({mountains: MOUNTAINS});
});

app.listen(3000, () =>{
   console.log('Server running on port 3000.'); 
});
