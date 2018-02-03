// require Node's built-in Modules
const fs = require('fs');

var mountain = {
    // read persisted data from file
     getMountains : function () {
        try {
            var mountainsString = fs.readFileSync('mountains.json');
            return JSON.parse(mountainsString);        
        } catch (err) {
            return [];
        }
    },

    // persist data in file
    saveMountains : function (mountains) {
        fs.writeFileSync('mountains.json', JSON.stringify(mountains));      
    },

    insertMountain : function (name, elev) {
        var mountains = this.getMountains();
        
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
            this.saveMountains(mountains);
            return mountain;
        }
    }
}

// Here, we are exporting the entire module as an Object which has multiple properties whch are functions we can invoke
module.exports = {
  mountain
};