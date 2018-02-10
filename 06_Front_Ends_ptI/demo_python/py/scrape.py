# This script calls other scripts (see imports) which scrape web pages from the AMC website,then it sends the data back in a JSON paylod.

# Test in Terminal:
# Get data for all Mountains: 
#   python3 scrape.py mountains /
# Get details for specific Mountain: 
#   python3 scrape.py mountain /hiking-mount-washington

import sys
import scrape_mountains
import scrape_mountain

def processMountains(dataURL) :
    data = scrape_mountains.process(dataURL)
    print(data)
    
def processMountain(dataURL) :
    data = scrape_mountain.process(dataURL)
    print(data)

def process(action, dataURL) :
    functions = {
                 'mountains' : processMountains,
                 'mountain' : processMountain,
                }

    functions[action](dataURL)

if __name__ == '__main__' :
    try :
        process = process(sys.argv[1], sys.argv[2])
    except Exception :
        print('There was an error executing the scrape.py script.')
