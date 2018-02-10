# Client Apps
This Repo contains examples of dynamic clients which get data from a JSON file served from a Node HTTP Server.

Although this course focuses on the MEAN Stack (using Angular on the fron-end), I'm providing HTML / PHP / jQuery Mobile front-end examples here which all make an AJAX call to the same Node server for data. 

We will cover Angular later in the semester.

## Note on Goole Maps API Keys
In several of the HTML pages in these demos, you will need to replace the ```YOUR_GMAPS_API_KEY_HERE``` text in the script tags (see example below) with your Google Maps API Key for GMaps to function properly.
```
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GMAPS_API_KEY_HERE&callback=initMap" async defer></script>
```

## Testing
+ Start Node server
```
$ cd server
$ node server
```

Note: If you fail to start the Node server before launching a Client App, you will get the following error(s) on the Clients.

## HTML and PHP Client Error
![HTML_PHP](img/html_php_error.png?raw=true "Server Error")

## jQuery Mobile Client Error
![jQuery Mobile](img/jqmobile_error.png?raw=true "Server Error")


<a id="apps"></a>
## Client Apps
+ [HTML Client](#html_client)
+ [PHP Client](#php_client)
+ [jQuery Mobile Client](#jqmobile_client)


<a id="html_client"></a>
### 1_HTML_Client
This Client App is built in standard HTML.

+ Simply open index.html in your browser

![Show Map](img/html_php_map.png?raw=true "Map")

+ [top](#apps)


<a id="php_client"></a>
### 2_PHP_Client 
This App is a variation of the HTML App, converted to PHP.

+ Deploy the php App to a web server and open index.php

![Gallery](img/html_php_gallery.png?raw=true "Gallery")

+ [top](#apps)


<a id="jqmobile_client"></a>
### 3_jQuery_Mobile_Client 
This App is written in jQuery Mobile.

+ Simply open index.html in your browser

![Map](img/jqmobile_map.png?raw=true "Map")

+ [top](#apps)


## Useful links
* [PHP](http://www.php.net/)
* [jQuery Mobile](https://jquerymobile.com/)
* [Google Maps API](https://developers.google.com/maps/)

