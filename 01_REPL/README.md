# REPL: Read-Eval-Print-Loop
The REPL module provides a Read-Eval-Print-Loop implementation that is available both as a standalone program or includible in other applications.

## Using the REPL
### Ex1: Execute in Terminal
```
    $ node
    > var mountains = [];
    > console.log(mountains);
    []

    > var mountain = {"name": "Mt. Washington", "elevation": "6,288"};
    > console.log(mountain);
    { name: 'Mt. Washington', elevation: '6,288' }

    > console.log(mountain.name);
    Mt. Washington

    > mountains.push(mountain);
    1
    > console.log(mountains);
    [ { name: 'Mt. Washington', elevation: '6,288' } ]

    > .exit
```

### Ex2: Execute in Terminal
```
    $ node
    > var mountain = {"name": "Mt. Washington", "elevation": 6288};

    > console.log(mountain);
    { name: 'Mt. Washington', elevation: 6288 }

    > console.log(`${mountain.name}, ${mountain.elevation}'`);
    Mt. Washington, 6288'

    > var elevation = mountain.elevation;

    > console.log(elevation);
    6288

    > elevation = elevation.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    '6,288'
    > console.log(`${mountain.name}, ${elevation}'`);
    Mt. Washington, 6,288'

    > .exit
```


## Multi-Line REPL Commands (.editor)
### Ex1: Execute in Terminal
```
    $ node
    > var mountains = [];
    > mountains;
    []

    > .editor
    // Entering editor mode (^D to finish, ^C to cancel)
    var mountain = {
        "name": "Mt. Washington",
        "elevation": "6,288"
    };
    > mountain;
    { name: 'Mt. Washington', elevation: '6,288' }

    > mountains.push(mountain);
    1
    > mountains;
    [ { name: 'Mt. Washington', elevation: '6,288' } ]

> .exit
```

### Ex2: Execute in Terminal
```
    $ node
    > var mountains = [];

    > .editor
    // Entering editor mode (^D to finish, ^C to cancel)
    function Mountain(name, elevation, desc) {
        this.name = name;
        this.elevation = elevation;
        this.desc = desc;
        
        this.getMountain = function() {
            return `${this.name}: ${this.elevation}' - ${this.desc}`;
        };
    }

    > mountains.push(new Mountain("Mt. Washington", "6,288", "Highest peak east of the Mississippi River and north of the Carolinas."));
    1
    > mountains.push(new Mountain("Mt. Adams", "5,799", "Second highest peak in New England."));
    2
    > mountains;
    [ Mountain {
        name: 'Mt. Washington',
        elevation: '6,288',
        desc: 'Highest peak east of the Mississippi River and north of the Carolinas.',
        getMountain: [Function] },
    Mountain {
        name: 'Mt. Adams',
        elevation: '5,799',
        desc: 'Second highest peak in New England.',
        getMountain: [Function] } ]

    > .editor
    // Entering editor mode (^D to finish, ^C to cancel)
    mountains.forEach((val, index) => {
        console.log(index + ": " + val.getMountain());
    });

    0: Mt. Washington: 6,288' - Highest peak east of the Mississippi River and north of the Carolinas.
    1: Mt. Adams: 5,799' - Second highest peak in New England.

    > .exit
```

### Ex3: Execute in Terminal - Requires data.json file
```
    $ node
    > var data = require('./data.json');

    > var mountains = data.mountains;

    > console.log(mountains.length);
    48

    > .editor
    // Entering editor mode (^D to finish, ^C to cancel)
    Number.prototype.format = function(){
    return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };

    [Function]
    > .editor
    // Entering editor mode (^D to finish, ^C to cancel)
    mountains.forEach((mountain, index) => {
    console.log(`${index}: ${mountain.name}, ${mountain.elevation.format()}'`);
    });  

    0: Mt. Washington, 6,288'
    1: Mt. Adams, 5,799'
    2: Mt. Jefferson, 5,716'
    3: Mt. Monroe, 5,372'
    ...
    47: Mt. Tecumseh, 4,003'

    > .exit
```

## Useful link(s)
* [Node.js REPL](https://nodejs.org/api/repl.html)
