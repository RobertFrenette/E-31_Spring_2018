# HTTP Server
This repo contains an example of calling an external process (Python3 App) to obtain data.


IMPORTANT: This is an "advanced topic" which is not officially part of the course! I'm presenting it as an example for those familair with Python as another way to get data from an external source.


Note: If the [AMC](https://www.outdoors.org/trip-ideas-tips-resources/plan-your-trip/nh-4000-footers) changes the markup on thier site, the Python scripts will need to be modified -- a risk of screen-scraping. As an example, on 2/10/18, the AMC site had an error in their HTML which placed an extra : in the img src attribues for the mountain images on their page.

![HTML Error][err-img]

Removing the extra : in the atribute for the Mt. Washington image displayed the image on the page.

![HTML Fix][err-fix-img]



## Install Python3 (Mac)
```
$ brew install python3
$ python3 --version
Python 3.6.4
```

## Install BeautifulSoup4
In py/beautifulsoup4-4.6.0 dir
```
python3 setup.py install
```

## server.js

### To Launch
```
$ node server
```

###  To Test in Browser (or makes GET request  in Postman)
 * Get data for all Mountains: [http://127.0.0.1:3000?action=mountains&dataURL=/](http://127.0.0.1:3000?action=mountains&dataURL=/)
 * Get details for specific Mountain: [http://127.0.0.1:3000?action=mountain&dataURL=/hiking-mount-washington](http://127.0.0.1:3000?action=mountain&dataURL=/hiking-mount-washington) 

### To Launch Client App
+ open ```client/index.html``` in your Browser

![Screen Shot][client-img]

## Useful links
* [python3](https://www.python.org/download/releases/3.0/)
* [BeautifulSoup4](https://pypi.python.org/pypi/beautifulsoup4)


[client-img]: img/client.png
[err-img]: img/err.png
[err-fix-img]: img/err_fix.png

