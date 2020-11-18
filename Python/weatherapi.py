import json
import requests

print('Please enter your zip code:')
zip= input()

r=requests.get('http://api.openweathermap.org/data/2.5/weather?zip=%s,us&appid=1d075e4c9ea344f915d32b3a8ad2a6c3' % zip)
data=r.json()

print(data['weather'][0]['description'])