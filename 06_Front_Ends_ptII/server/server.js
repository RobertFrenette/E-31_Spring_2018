// node server
const http = require('http');

// NOTE: fs module required for "Async with CallBack funct" ex below
//const fs = require('fs');

// NOTE: promise module required for "Async with Promise" ex below
// npm install promise --save
const Promise = require("promise");

const mountains = require('./mountains');

const host = '127.0.0.1';
const port = 3000;

http.createServer((request, response) => {
    // If you get a CORS error, add the following line:
    response.setHeader('Access-Control-Allow-Origin', '*');

    if (request.method === 'GET') {
        // GET http://localhost:3000/mountains
        if (request.url === '/mountains') {
            /*
            // Async with CallBack funct
            fs.readFile('data/data.json', 'utf8', (readFileErr, data) => {
                            if (readFileErr) {
                                            response.statusCode = 500;
                                            response.end();
                            }
                            let mountainsResp = [];
                            let mountainData = JSON.parse(data).mountains;

                            mountainData.forEach((mountain) => {
                                            mountainsResp.push({
                                                                    "name": mountain.name,
                                                                    "elevation" : mountain.elevation,
                                                                    "effort": mountain.effort,
                                                                    "img": mountain.img,
                                                                    "desc": mountain.desc,
                                                                    "coords": {
                                                                        "lat": mountain.lat,
                                                                        "lng": mountain.lng
                                                                    }
                                                                });
                            });
                            response.statusCode = 200;
                            response.end(JSON.stringify({"mountains": mountainsResp}));
            }); // End CallBack
            */

            // Async with Promise
            let promise = mountains.getAllMountains();
            promise.then((data) => {
                let mountainsResp = [];
                let mountainData = JSON.parse(data).mountains;
                    mountainData.forEach((mountain) => {
                        mountainsResp.push({
                                            "name": mountain.name,
                                            "elevation" : mountain.elevation,
                                            "effort": mountain.effort,
                                            "img": mountain.img,
                                            "desc": mountain.desc,
                                            "coords": {
                                                "lat": mountain.lat,
                                                "lng": mountain.lng
                                            }
                                        });
                });
                response.statusCode = 200;
                response.end(JSON.stringify({ "mountains": mountainsResp }));
            })
                .catch((error) => {
                    response.statusCode = 500;
                    response.end();
                }); // End Promise

        } else {
            // not /mountains endpoint
            response.statusCode = 404;
            response.end();
        }
    } else if (request.method === 'POST') {
        // POST http://localhost:3000/mountain
        if (request.url === '/mountain') {
            let body = [];

            // CallBack
            /*
            request.on('data', (chunk) => {
                            body.push(chunk);
            }).on('end', () => {
                            body = Buffer.concat(body).toString();
                            response.statusCode = 200;
                            response.end(body);
            }).on('error', (err) => {
                            response.statusCode = 500;
                            response.end();
            });
            */

            // Promise
            request.on('data', (data) => {
                let parsedData = JSON.parse(data);
                //console.log(parsedData);

                let promise = mountains.insertMountain(
                                                        parsedData.mtnName, 
                                                        parsedData.mtnElevation, 
                                                        parsedData.mtnEffort, 
                                                        parsedData.mtnImage,
                                                        parsedData.mtnDesc,
                                                        parsedData.mtnLat,
                                                        parsedData.mtnLng
                                                    );

                promise.then((data) => {
                    response.statusCode = 200;
                })
                    .catch((error) => {
                        // Mountain already exists
                        response.statusCode = 403;
                        response.end();
                    }); // End Promise
            }).on('end', () => {
                response.end();
            }).on('error', (err) => {
                response.statusCode = 500;
                response.end();
            });
        } else {
            // not /mountain endpoint
            response.statusCode = 404;
            response.end();
        }
    } else {
        // not GET or POST
        response.statusCode = 404;
        response.end();
    }
}).listen(3000);