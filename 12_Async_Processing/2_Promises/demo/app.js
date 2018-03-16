console.log('Entering App...');

const request = require('request');

var getAddress = (address) => {
    return new Promise((resolve, reject) => {
        if (address !== '') {
            // NOTE: Replace YOUR_API_KEY in the apiKey const below with your GMaps API Key!
            const apiKey = 'YOUR_API_KEY';
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
        
            var options = {
                url: url,
                json: true
            };
            
            request(options, (error, response, body) => {
                if (error) {
                    reject(JSON.stringify(error));
                } else {
                    let formatted_address = body.results[0].formatted_address;
                    
                    let location = body.results[0].geometry.location;
                    let lat = location.lat;
                    let lng = location.lng;

                    let addr = `{"formatted_address": "${formatted_address}", "lat": ${lat}, "lng": ${lng}}`;
                    
                    resolve(addr);
                }
            });
        } else {
            reject('Address not provided!');
        }
    });
};

getAddress('18%20Brattle%20St,%20Cambridge').then((addr) => {
    console.log(addr);
}).catch((err) => { 
    console.log(err);
});
 
getAddress('').then((addr) => {
    console.log(addr);
}).catch((err) => { 
    console.log(err);
});

console.log('Done!');
