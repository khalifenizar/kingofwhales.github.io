import csv
import json
from collections import OrderedDict

f = open("res/demographics.csv")
reader = csv.DictReader(f)
data = [row for row in reader]
#print(data)

searchKeys = ["race","education","maritalstatus"]
dataSet = [{"race":1},
			{"race":2},
			{"race":3},
			{"race":4},
			{"race":5},
			{"education":1},
			{"education":2},
			{"education":3},
			{"education":4},
			{"maritalstatus":1},
			{"maritalstatus":2},
			{"maritalstatus":3},
			{"maritalstatus":4},
			{"maritalstatus":5},
			{"maritalstatus":6},
			]

for group in dataSet:
	countMales = [0] * 4
	countFemales = [0] * 4
	totalMales = [0] * 4
	totalFemales = [0] * 4
	averageMales = [0] * 4
	averageFemales = [0] * 4
	groups = list(group)
	key = groups[0]
	print(key)
	for x in range(0,4):	
		for row in data:
#			try:
				if row[key] == str(group[key]):
					if int(row["agegroup"]) == (x+1):
						if row["sex"] == "1":
							countMales[x] +=1
							totalMales[x] += float(row["averagedrink"])
						if row["sex"] == "2":
							countFemales[x] +=1
							totalFemales[x] += float(row["averagedrink"])
#			except ValueError,e:
#						print "error", e, "on line", index+1
#	print(totalMales)
		if countMales[x] == 0:
			countMales[x] = 1
		if countFemales[x] == 0:
			countFemales[x] =1
	averageMales = [float(a)/float(b) for a,b in zip(totalMales,countMales)]
	averageFemales = [float(a)/float(b) for a,b in zip(totalFemales,countFemales)]
	group["male"] = averageMales
	group["female"] = averageFemales
print (dataSet)

#for item in data:
#	for key in searchKeys:  # start with race
#		status = item[key]    # the status 1,2,3,4,5 for each time
#		if key not in dataSet:
#			var obj = {}
#			dataSet.append(obj)
#			
#		if status not in dataSet[key]:
#			dataSet[key][status] = {}


#print(dataSet)
# the structure has been created. What is left is to start the search and calculations

#for key in searchKeys:
#	states = dataSet[key].keys()
#	#print(states)
#	for status in states:
##		print (states)
#		countMales = [0] * 4
#		countFemales = [0] * 4
#		totalMales = [0] * 4
#		totalFemales = [0] * 4
#		averageMales = [0] * 4
#		averageFemales = [0] * 4
#		for x in range(0,4):
#			for index,item in enumerate(data):
#				try:
#					if item[key] == status:
#							if int(item["agegroup"]) == (x+1):
#								if item["sex"] == "1":
#									countMales[x] +=1
#									totalMales[x] += float(item["averagedrink"])
#								if item["sex"] == "2":
#									countFemales[x] +=1
#									totalFemales[x] += float(item["averagedrink"])
#				except ValueError, e:
#					print "error", e, "on line", index+1
#			if countMales[x] == 0:
#				countMales[x] = 1
#			if countFemales[x] == 0:
#				countFemales[x] =1
##		print (str(countMales) + " for males status" + status + " for group " + key)
#		averageMales = [float(a)/float(b) for a,b in zip(totalMales,countMales)]
#		averageFemales = [float(a)/float(b) for a,b in zip(totalFemales,countFemales)]
#		dataSet[key][status]["males"] = averageMales 
#		dataSet[key][status]["females"] = averageFemales
		
#print(dataSet)
#		print (averageMales)
#		
#		print(totalMales)					
#		print (str(countMales) + " for males status" + status + " for group " + key)			
#		print (str(countFemales) + " for females status" + status + " for group " + key)		
		
#	print (countFemales)
					
					
json_output = json.dumps(dataSet, indent=4)
with open("res/demographics.json","w") as f:
	f.write(json_output)
	
