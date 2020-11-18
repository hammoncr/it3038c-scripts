import json
import requests



r=requests.get('http://localhost:3000')
data=r.json()

## output data

for x in data:
    print("%s is %s." % (x["name"], x["color"]))
