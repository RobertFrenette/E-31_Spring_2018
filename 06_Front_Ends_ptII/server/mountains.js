const fs = require('fs');
const Promise = require("promise");

// read persisted data from file
var getAllMountains = () => {
    return new Promise(
        function (resolve, reject) {
            fs.readFile('data/data.json', { encoding: 'utf8' }, (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });
};

// read persisted data from file
var getMountains = () => {
    try {
        var mountainString = fs.readFileSync('data/data.json');
        return mountainString;
    } catch (err) {
        return [];
    }
};

// Insert a Mountain
var insertMountain = (name, elevation, effort, img, desc, lat, lng) => {
    var mountain = {
        name, 
        elevation, 
        effort, 
        img, 
        desc, 
        lat, 
        lng
    };

    var mountains = [];
    var persistedMountains = JSON.parse(getMountains()).mountains;

    // ensure no dups
    var duplicateMountains = persistedMountains.filter((mountain) => {
        return mountain.name === name;
    });

    // persist the mountains
    if (duplicateMountains.length === 0) {
        // keep existing Mountains
        mountains = persistedMountains;
        // add new Mountains
        mountains.push(mountain);

        return new Promise(
            function (resolve, reject) {
                // persist data in file
                fs.writeFile('data/data.json', JSON.stringify({ "mountains": mountains }), (error, data) => {
                    if (error) {
                        reject();
                    } else {
                        resolve();
                    }
                });
            });
    } else {
        // found a dup
        return new Promise(
            function (resolve, reject) {
                reject();
            });
    }
};

module.exports = {
    insertMountain,
    getAllMountains
};
