console.log('Entering App...');

const request = require('request');

var getDataForAddress = (address) => {
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

                    let addr = `{formatted_address: ${formatted_address}, lat: ${lat}, lng: ${lng}}`;
                    
                    console.log(`Address in getDataForAddress(): ${addr}`);
                    resolve(addr);
                }
            });
        } else {
            reject('Address not provided!');
        }
    });
};

// Define Async Function
async function getAddress(address) {
    try {
        // 1. Call funct with returns a Promise
        var theAddress =  JSON.stringify(getDataForAddress(address));

        // 2. Call funct which returns a Promise using Await
        //var theAddress = await getDataForAddress(address);
        
        console.log(`Address Response: ${theAddress}`);
    } catch(err) {
        console.log(`Error: ${err}`);
    }
}

getAddress('18%20Brattle%20St,%20Cambridge');

console.log('Done!');
