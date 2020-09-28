import time
print('What is your name?')
myName = input()
While myName != 'your name':
print('This not "your name". Please type "your name"?')
myName = input()
print('Hello, ' + myName + '. That is a good name. How old are you?')
myAge = input()
if myAge < 13:
print("You are a minor?")
elif myAge = 13:
print("You are a teenager now... that's cool, I guess")
elif myAge > 13 and myAge < 30:
print("You are young and dumb")
elif myAge >=30 and myAge < 65:
print("You're adulting.")
else:
print("... and you're not dead yet?")
programAge = int(time.time() -start time)
print("%s? That's funny, im only a few seconds old." % myAge)
print('I wish I was %s years old' % (myAge, programAge))
time.sleep(3)
print("I'm tired. I go sleep sleep now.") 