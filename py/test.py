import csv
import json
from collections import OrderedDict

f = open("res/demographics.csv")
reader = csv.DictReader(f)
data = [row for row in reader]
#print(data)

searchKeys = ["race","education","maritalstatus"]
dataSet = {}

for item in data:
	for key in searchKeys:	# start with race
		status = item[key]	  # the status 1,2,3,4,5 for each time
		if key not in dataSet:
			dataSet[key] = {}
		if status not in dataSet[key]:
			dataSet[key][status] = []					

			
for key in searchKeys:
	states = dataSet[key].keys()
	#print(states)
	for status in states:								
		countMalesAge1 = countMalesAge2 = countMalesAge3 = countMalesAge4 = 0;
		countFemalesAge1  = countFemalesAge2 = countFemalesAge3 = countFemalesAge4 = 0;
		maleAlcoholAge1 = maleAlcoholAge2 = maleAlcoholAge3 = maleAlcoholAge4 = 0;
		femaleAlcoholAge1 = femaleAlcoholAge2 = femaleAlcoholAge3 = femaleAlcoholAge4  = 0;	 #SIMPLIFY?
		maleAverageAge1 = maleAverageAge2 = maleAverageAge3 = maleAverageAge4 = femaleAverageAge1 =femaleAverageAge2 = femaleAverageAge3 = femaleAverageAge4 = 0					
		for index,item in enumerate(data):
			try:
				if item[key] == status:		
					if item["sex"] == "1":
						if item["agegroup"] == "1":
							maleAlcoholAge1 += float(item["averagedrink"])
							countMalesAge1 += 1
						if item["agegroup"] == "2":
							maleAlcoholAge2 += float(item["averagedrink"])
							countMalesAge2 += 1	
						if item["agegroup"] == "3":
							maleAlcoholAge3 += float(item["averagedrink"])
							countMalesAge3 += 1	
						if item["agegroup"] == "4":
							maleAlcoholAge4 += float(item["averagedrink"])
							countMalesAge4 += 1						
					if item["sex"] == "2":
						if item["agegroup"] == "1":
							femaleAlcoholAge1 += float(item["averagedrink"])
							countFemalesAge1 += 1
						if item["agegroup"] == "2":
							femaleAlcoholAge2 += float(item["averagedrink"])
							countFemalesAge2 += 1	
						if item["agegroup"] == "3":
							femaleAlcoholAge3 += float(item["averagedrink"])
							countFemalesAge3 += 1	
						if item["agegroup"] == "4":
							femaleAlcoholAge4 += float(item["averagedrink"])
							countFemalesAge4 += 1	
			except ValueError, e:
				print ("error", e, "on line", index+1)
		print(maleAlcoholAge1)
		print(maleAlcoholAge2)
		print(maleAlcoholAge3)		
		print(maleAlcoholAge4)		
#		print(countMalesAge1)
#		print(countMalesAge2)
#		print(countMalesAge3)
#		print(countMalesAge4)
		
#		maleAverageAge1 = maleAlcoholAge1/	countMalesAge1
##		femaleAverageAge1 = femaleAlcoholAge1/countFemalesAge1
#		maleAverageAge2 = maleAlcoholAge2/	countMalesAge2
##		femaleAverageAge2 = femaleAlcoholAge2/countFemalesAge2
#		maleAverageAge3 = maleAlcoholAge3/	countMalesAge3
##		femaleAverageAge3 = femaleAlcoholAge3/countFemalesAge3
#		maleAverageAge4 = maleAlcoholAge4/	countMalesAge4
##		femaleAverageAge4 = femaleAlcoholAge4/countFemalesAge4
#		listMale = [maleAverageAge1,maleAverageAge2,maleAverageAge3,maleAverageAge4]
#		listFemale = [femaleAverageAge1,femaleAverageAge2,femaleAverageAge3,femaleAverageAge4]
#		print(listMale)
#			
#		for x in range(0,4):
#			print("for male " + "current category is " + key + " and current status is " + status +" age group is " + str(x+1)	+ "they drink around "+ str(listMale[x]))
#			print("for female " + "current category is " + key + " and current status is " + status +" age group is " + str(x+1) + "they drink around" + str(listFemale[x]))		
				
# How to simpliy this after adding the age group thing? 