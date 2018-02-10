# Note: This script requires the BeautifulSoup4 Library
# https://www.crummy.com/software/BeautifulSoup/

# This script is called from scrape.py to scrape AMC's 4,000-Footer-Guide web page,
# then returns a JSON payload containing data for all Mountains.

# AMC page URL for Mountains Data:
# https://www.outdoors.org/trip-ideas-tips-resources/plan-your-trip/nh-4000-footers

# Sample Response:
# {
#	 "mountain": [{
#		"mountainName": "Mt. Washington",
#		"mountainElevation": "6,288'",
#		"mountainEffort": "Strenuous",
#		"mountainURL": "/hiking-mount-washington",
#		"mountainPic": "https://www.outdoors.org/wp-content/uploads/2017/10/Washington-StoryImage_2.jpg"
#	}]
# }    

from urllib.request import urlopen
import re
import json
import collections
from bs4 import BeautifulSoup

data = {}

def getDataFromWeb(dataURL) :
    prefix = 'https://www.outdoors.org/trip-ideas-tips-resources/plan-your-trip/nh-4000-footers'
    img_prefix = ''
    response = []
    
    page = urlopen(prefix + dataURL)
    pageData = page.read()
    soup = BeautifulSoup(pageData, "html.parser")
    
    divs = soup.find_all('div', class_='elementor-element elementor-element- elementor-column elementor-col-33 elementor-top-column')

    for div in divs :
        mountainData = div.find('h2').text
        mountainURL  = div.find('a')['href'].strip()
        indx = mountainURL.rfind('/')
        mountainURL = mountainURL[indx:]
        mountainPic  = img_prefix + div.find('img')['src']

        mountainData = mountainData.replace('\n', '')
        indx = re.search("\d", mountainData).start()
        mountainData = mountainData[:indx] + '|' + mountainData[indx:]
        mountainData = mountainData.replace(' |', '|')
        mountainData = mountainData.replace('| ', '|')
        mountainData = mountainData.replace('\' ', '\'')
        
        mountainData = mountainData.split('|');

        d = collections.OrderedDict()
        d['mountainName'] = mountainData[0]
        d['mountainElevation'] = mountainData[1]
        d['mountainEffort'] = mountainData[2]
        d['mountainURL']  = mountainURL
        d['mountainPic']  = mountainPic

        response.append(d)

    global data
    data = {'mountains' : response}

def process(dataURL) :
    getDataFromWeb(dataURL)
    return(json.dumps(data))
