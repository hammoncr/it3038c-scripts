print("Please type 'your name'.")
myName = input()
while myName != 'Chris':
    if myName == 'your name':
        print("That is a lame joke...")
    else:
        print("What is your real name?")
    myName = input()

print("Hello " + myName +" that is a good name.")