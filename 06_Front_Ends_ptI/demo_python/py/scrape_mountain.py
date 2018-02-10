# Note: This script requires the BeautifulSoup4 Library
# https://www.crummy.com/software/BeautifulSoup/

# This script is called from scrape.py to scrape AMC's 4,000-Footer-Guide web page for a specific Mountain,
# then returns a JSON payload containing data for the Mountain.

# AMC page URL for Mt Washington Data:
# https://www.outdoors.org/trip-ideas-tips-resources/plan-your-trip/nh-4000-footers/hiking-mount-washington

# Sample Response:
# {
#	 "mountain": [{
#		"mountainDesc": "Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna."
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
    response = []

    page = urlopen(prefix + dataURL)
    pageData = page.read()
    soup = BeautifulSoup(pageData, "html.parser")
    
    div = soup.find_all('div', class_='elementor-text-editor elementor-clearfix')[0]

    mountainDesc = div.find('p').getText()

    d = collections.OrderedDict()
    d['mountainDesc'] = mountainDesc        

    response.append(d)

    global data
    data = {'mountain' : response}

def process(dataURL) :
    getDataFromWeb(dataURL)
    return(json.dumps(data))
