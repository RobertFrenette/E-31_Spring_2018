console.log('Entering App...');

// https://www.npmjs.com/package/request
// HTTP request lib
const request = require('request');

// NOTE: Replace YOUR_API_KEY in the apiKey var below with your GMaps API Key!
const apiKey  = 'YOUR_API_KEY';
var   address = '18%20Brattle%20St,%20Cambridge'; 
const goodURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
const badURL  = `https://map.googleapi.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

var options = {
    url: goodURL,
    json: true
};

// request takes two arguments:
// 1. options Object
// 2. CallBack function to be executed
request(options, (error, response, body) => {
    if (error) {
        console.log('Error!');
        console.log(JSON.stringify(error, undefined, 2));
    } else {
        //console.log(JSON.stringify(body, undefined, 2));

        let formatted_address = body.results[0].formatted_address;
        console.log(formatted_address);

        let location = body.results[0].geometry.location;
        //console.log(location);

        let lat = location.lat;
        let lng = location.lng;
        let lat_lng = `{lat: ${lat}, lng: ${lng}}`;
        console.log(lat_lng);
    }
});

console.log('Done!');
