// require Node's built-in Modules
const fs = require('fs');

// read persisted data from file
var getMountains = () => {
    try {
        var mountainsString = fs.readFileSync('mountains.json');
        return JSON.parse(mountainsString);        
    } catch (err) {
        return [];
    }
};

// persist data in file
var saveMountains = (mountains) => {
    fs.writeFileSync('mountains.json', JSON.stringify(mountains));      
};

var insertMountain = (name, elev) => {
    var mountains = getMountains();
    
    // in ES6, if param and prop names are the same,
    // you can use the following syntax instead of
    // name: name, elev: elev
    var mountain = {
      name,
      elev
    };
    
    // ensure no dups
    var duplicateMountains = mountains.filter((mountain) => {
        return mountain.name === name;
    });
    
    // persist the moutains
    if (duplicateMountains.length === 0) {
        mountains.push(mountain);
        saveMountains(mountains);
        return mountain;
    }
};

// ES6
module.exports = {
  insertMountain
};