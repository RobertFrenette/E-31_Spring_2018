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

// Insert a Mountain
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

// Get a single Mountain by mountain name
var getMountain = (name) => {
    var mountains = getMountains();
    // ES6 single-line command
    var filteredMountains = mountains.filter((mountain) => mountain.name === name);
    return filteredMountains[0];
};

// "Update" (delete and insert) a Mountain
var updateMountain = (name, elev) => {
  var mountains = getMountains();
  var filteredMountains = mountains.filter((mountain) => mountain.name === name);

  // verify Mountain exists
  if (filteredMountains.length > 0) {
    // delete the existing Mountian
    deleteMountain(name);
    // insert new Mountain
    return insertMountain(name, elev);
  }
  
  return filteredMountains[0];
};

// Delete a Mountain
var deleteMountain = (name) => {
    var mountains = getMountains();
    var filteredMountains = mountains.filter((mountain) => mountain.name !== name);

    saveMountains(filteredMountains);
    
    return mountains.length !== filteredMountains.length;
};

// Return all Mountains
var listMountains = () => {
  return getMountains();
};

// Here, we are exporting the functions we want to expose / invoke from app.js
// Note these functions could have been wrapped in a single Object, as was done in demo/app.js
module.exports = {
  insertMountain,
  getMountain,
  updateMountain,
  deleteMountain,
  listMountains
};