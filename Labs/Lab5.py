import date
def calculateAge(birthDate):
secondsInYear = 31536000
age = int((date.today) - birthDate).days / secondsInYear)
return age
print(calculateAge(date(1986, 4, 30)), "seconds")
