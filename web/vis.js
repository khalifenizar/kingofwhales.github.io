"use strict";

//$(function() {
//  var fileName = "res/demographics.json";
//  $.getJSON(fileName)
//   .done(function (data) {
//     visualize(data);
//   })
//   .fail(function() {
//     alert("Failed to load the JSON file: " + fileName);
//   });
//});
//var haha = function(value){
//	var type = value.getAttribute("data-val");
//	console.log(type)
//}

var codeHelp = {
	"raceW":0,
	"raceB":1,
	"raceH":2,
	"raceA":3,
	"raceO":4,
	"eduLessHigh":5,
	"eduHigh":6,
	"eduSomeCollege":7,
	"eduCollege":8,
	"maritalM":9,
	"maritalD":10,
	"maritalW":11,
	"maritalS":12,
	"maritalN":13,
	"maritalAMU":14
}
var margin = { top: 50, right: 50, bottom: 50, left: 150 },
		width = 800 - margin.left - margin.right,
		height = 350 - margin.top -margin.bottom;
var ageGroupScale = d3.scale.linear()
								.domain([0,5])
								.range([0,width])
								
var alcoholScale = d3.scale.linear()
								.domain([0,1.4])
								.range([height,0])
var line = d3.svg.line()
					.x(function(d,i){
						if(i<4){
							return ageGroupScale(i+1)
						}else{
							return ageGroupScale(i-3)
						}
					})
					.y(function(d,i){
						return alcoholScale(d["stat"])
					})
					.interpolate("linear");
					
var svg = d3.select("#chart")
             .append("svg")
             .attr("width", width + margin.left + margin.right)
             .attr("height", height + margin.top + margin.bottom)
             .style("width", width + margin.left + margin.right)
             .style("height", height + margin.top + margin.bottom)
             .append("g")
             .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// work on the line graph. 
// scale
//	var ageGroupScale = d3.scale.linear()
//								.domain([0,5])
//								.range([0,width])
//								
//	var alcoholScale = d3.scale.linear()
//								.domain([1.5,0])
//								.range([0,height])

var xAxis = d3.svg.axis()
					.scale(ageGroupScale)
					.orient("bottom")
					.ticks(4);
var yAxis = d3.svg.axis()
					.scale(alcoholScale)
					.tickSize(width)
					.orient("right")
					.ticks(5);
					
					
var xAxisGroup = svg.append("g")
					.attr("transform","translate(0," + height + ")")
					.call(xAxis);
	
					
xAxisGroup.append("text")
					.attr("x",ageGroupScale(0))
					.attr("y",40)
					.attr("font-size","10px")
					.text("Age Group")
					
xAxisGroup.append("text")
					.attr("x",ageGroupScale(0.87))
					.attr("y",40)
					.attr("font-size","10px")
					.text("18-24");
xAxisGroup.append("text")
					.attr("x",ageGroupScale(1.87))
					.attr("y",40)
					.attr("font-size","10px")					
					.text("25-44");
xAxisGroup.append("text")
					.attr("x",ageGroupScale(2.87))
					.attr("y",40)
					.attr("font-size","10px")					
					.text("45-64");
xAxisGroup.append("text")
					.attr("x",ageGroupScale(3.90))
					.attr("y",40)
					.attr("font-size","10px")					
					.text("65+");
					
var yAxisGroup = svg.append("g")
					.attr("class","y axis")
					.call(yAxis)
					.append("text")
					.attr("y",-30)
					.style("text-anchor","start")
					.text("Number of Drinks Per Day In the Past 30 Days")
svg.selectAll(".y.axis text").attr("x",4).attr("dy",-4);
var focus = svg.append("g")
				.style("display","none")
				
focus.append("line")
       .attr("class", "x")
       .style("stroke", "blue")
       .style("stroke-dasharray", "3,3")
       .style("opacity", 0.5)
       .attr("y1", 0)
       .attr("y2", height);

   // append the y line
focus.append("line")
       .attr("class", "y")
       .style("stroke", "blue")
       .style("stroke-dasharray", "3,3")
       .style("opacity", 0.5)
       .attr("x1", width)
       .attr("x2", width);
focus.append("line")
       .attr("class", "y-woman")
       .style("stroke", "blue")
       .style("stroke-dasharray", "3,3")
       .style("opacity", 0.5)
       .attr("x1", width)
       .attr("x2", width);

focus.append("circle")
		.attr("class","y")
		.style("fill","none")
		.style("stroke","blue")
		.attr("r",4)
focus.append("circle")
		.attr("class","y-woman")
		.style("fill","none")
		.style("stroke","blue")
		.attr("r",4)
focus.append("text")
       .attr("class", "y1")
       .style("stroke", "white")
       .style("stroke-width", "3.5px")
       .style("opacity", 0.8)
       .attr("dx", 8)
       .attr("dy", "-.3em");
focus.append("text")
       .attr("class", "y2")
       .attr("dx", 8)
       .attr("dy", "-.3em");

   // place the date at the intersection
focus.append("text")
       .attr("class", "y3")
       .style("stroke", "white")
       .style("stroke-width", "3.5px")
       .style("opacity", 0.8)
       .attr("dx", 8)
       .attr("dy", "1em");
focus.append("text")
       .attr("class", "y4")
       .attr("dx", 8)
       .attr("dy", "1em");
focus.append("text")
       .attr("class", "y1-woman")
       .style("stroke", "white")
       .style("stroke-width", "3.5px")
       .style("opacity", 0.8)
       .attr("dx", 8)
       .attr("dy", "-.3em");
focus.append("text")
       .attr("class", "y2-woman")
       .attr("dx", 8)
       .attr("dy", "-.3em");

   // place the date at the intersection
focus.append("text")
       .attr("class", "y3-woman")
       .style("stroke", "white")
       .style("stroke-width", "3.5px")
       .style("opacity", 0.8)
       .attr("dx", 8)
       .attr("dy", "1em");
focus.append("text")
       .attr("class", "y4-woman")
       .attr("dx", 8)
       .attr("dy", "1em");
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
d3.selectAll(".button").on("click",function(){
	d3.select(".current").classed("current",false)
	d3.select(this).classed("current",true)
	updateData(this)
	
})
var bisectDate = d3.bisector(function(d){return d.ageGroup;}).left;
								
var updateData = function(choice){
	var groups = choice.getAttribute("data-val")
	var category = codeHelp[groups]
	d3.json("res/demographics.json",function(error,json){
		if (error) return console.warn(error);
		var data = json;
		var interArray = []
		interArray.push(data[category])
//	console.log(interArray)
		var currentArray = []
		for(var a=0;a<8;a++){
			var obj = {};
			if(a<4){
				obj["ageGroup"] = a+1
				obj["stat"] = Math.round((interArray[0]["male"][a])*100)/100
			}else{
				obj["ageGroup"] = a-3
				obj["stat"] = Math.round((interArray[0]["female"][a-4])*100)/100
			}
			currentArray.push(obj)
		}
		var maleArray = currentArray.slice(0,4)
		var femaleArray = currentArray.slice(4,8)
		d3.selectAll("circle.origin")
			.data(currentArray)
			.transition()
			.duration(1000)
			.attr("cy",function(d,i){
				return alcoholScale(d["stat"])
			})
			.attr("cx",function(d,i){
				if(i<4){
					return ageGroupScale(i+1)
				}else{
					return ageGroupScale(i-3)
				}
			})
			.attr("r",7)
			.style("fill",function(d,i){
				if(i<4){
					return "orange"
				}else{
					return "blue"
				}
			});
		d3.selectAll(".lineMale")
					.transition()
					.duration(1000)
					.attr("d",line(currentArray.slice(0,4)))
					.style("stroke-dasharray",("3,3"))
					.attr("stroke","orange")
					.attr("storke-width",2)
					.attr("fill","none");
		d3.selectAll(".lineFemale")
				.transition()
				.duration(1000)
				.attr("d",line(currentArray.slice(4,8)))
				.attr("stroke-dasharray",("3,3"))
				.attr("stroke","blue")
				.attr("storke-width",2)
				.attr("fill","none");
		svg.select("rect")
			.on("mousemove",mousemove)
//	console.log(maleArray)
//	console.log(femaleArray)
			function mousemove(){
				var x0 = ageGroupScale.invert(d3.mouse(this)[0]),
					i = bisectDate(maleArray,x0,1),
					d0 = maleArray[i-1],
					d1 = maleArray[i],
					d = x0 - d0.ageGroup > d1.ageGroup-x0 ? d1:d0;
				console.log(d)
				console.log(ageGroupScale(d.ageGroup))
				console.log(alcoholScale(d.stat))
				focus.select("circle.y")
					.attr("transform","translate(" + ageGroupScale(d.ageGroup) + ","
							+ alcoholScale(d.stat) +")");
				focus.select("text.y1")
					.attr("transform",
						"translate(" + ageGroupScale(d.ageGroup) + "," +
										alcoholScale(d.stat) + ")")
					.text(d.stat);
				
				focus.select("text.y2")
					.attr("transform",
						"translate(" + ageGroupScale(d.ageGroup) + "," +
										alcoholScale(d.stat) + ")")
					.text(d.stat);
				
				focus.select("text.y3")
					.attr("transform",
						"translate(" + ageGroupScale(d.ageGroup) + "," +
										alcoholScale(d.stat) + ")")
					.text("male");
				
				focus.select("text.y4")
					.attr("transform",
						"translate(" + ageGroupScale(d.ageGroup) + "," +
										alcoholScale(d.stat) + ")")
					.text("male");
				
				focus.select(".x")
					.attr("transform",
						"translate(" + ageGroupScale(d.ageGroup) + "," +
										alcoholScale(d.stat) + ")")
								.attr("y2", height - alcoholScale(d.stat));
				
				focus.select(".y")
					.attr("transform",
						"translate(" + width * -1 + "," +
										alcoholScale(d.stat) + ")")
								.attr("x2", width + width);
				var x0Woman = ageGroupScale.invert(d3.mouse(this)[0]),
					i = bisectDate(femaleArray,x0,1),
					d0 = femaleArray[i-1],
					d1 = femaleArray[i],
					d = x0 - d0.ageGroup > d1.ageGroup-x0 ? d1:d0;
		
				focus.select("circle.y-woman")
					.attr("transform","translate(" + ageGroupScale(d.ageGroup) + ","
							+ alcoholScale(d.stat) +")");
				focus.select("text.y1-woman")
					.attr("transform",
						"translate(" + ageGroupScale(d.ageGroup) + "," +
										alcoholScale(d.stat) + ")")
					.text(d.stat);
				
				focus.select("text.y2-woman")
					.attr("transform",
						"translate(" + ageGroupScale(d.ageGroup) + "," +
										alcoholScale(d.stat) + ")")
					.text(d.stat);
				
				focus.select("text.y3-woman")
					.attr("transform",
						"translate(" + ageGroupScale(d.ageGroup) + "," +
										alcoholScale(d.stat) + ")")
					.text("female");
				
				focus.select("text.y4-woman")
					.attr("transform",
						"translate(" + ageGroupScale(d.ageGroup) + "," +
										alcoholScale(d.stat) + ")")
					.text("female");
				
				focus.select(".x-woman")
					.attr("transform",
						"translate(" + ageGroupScale(d.ageGroup) + "," +
										alcoholScale(d.stat) + ")")
								.attr("y2", height - alcoholScale(d.stat));
				
				focus.select(".y-woman")
					.attr("transform",
						"translate(" + width * -1 + "," +
										alcoholScale(d.stat) + ")")
								.attr("x2", width + width);
		}
		
	});
}
















































































d3.json("kingofwhales.github.io/res/demographics.json",function(error,json){
		if (error) return console.warn(error); 
//	console.log(data);

//	var margin = { top: 50, right: 50, bottom: 50, left: 150 },
//		width = 1000 - margin.left - margin.right,
//		height = 700 - margin.top -margin.bottom;
	// based on the value returned, create a new array.
	var interArray = []
	interArray.push(data[category])
//	console.log(interArray)
	var currentArray = []
	for(var a=0;a<8;a++){
		var obj = {};
		if(a<4){
			obj["ageGroup"] = a+1
			obj["stat"] = Math.round((interArray[0]["male"][a])*100)/100
		}else{
			obj["ageGroup"] = a-3
			obj["stat"] = Math.round((interArray[0]["female"][a-4])*100)/100
		}
		currentArray.push(obj)
	}
//	console.log(currentArray)
//	console.log(currentArray)
	var circle = svg.append("g")
					.selectAll("circle")
					.data(currentArray) // inside data another enter     
					.enter()
					.append("circle")
					.attr("class","origin")
					.attr("cy",function(d,i){
						return alcoholScale(d["stat"])
					})
					.attr("cx",function(d,i){
						if(i<4){
							return ageGroupScale(i+1)
						}else{
							return ageGroupScale(i-3)
						}
					})
					.attr("r",7)
					.style("fill",function(d,i){
						if(i<4){
							return "orange"
						}else{
							return "blue"
						}
					});
	var lines = svg.append("g")
					.append("path")
					.attr("d",line(currentArray.slice(0,4)))
					.attr("class","lineMale")
					.style("stroke-dasharray",("3,3"))
					.attr("stroke","orange")
					.attr("storke-width",2)
					.attr("fill","none");
	var newLines = svg.append("g")
				.append("path")
				.attr("d",line(currentArray.slice(4,8)))
				.attr("class","lineFemale")
				.attr("stroke-dasharray",("3,3"))
				.attr("stroke","blue")
				.attr("storke-width",2)
				.attr("fill","none");
//	d3.selectAll("#demographics.section.button")
//		.on("click",function(){
//			console.log("haha" + this)
//		})

	var maleArray = currentArray.slice(0,4)
	var femaleArray = currentArray.slice(4,8)
	svg.append("rect")
		.attr("width",width)
		.attr("height",height)
		.style("fill","none")
		.style("stroke","white")
		.style("pointer-events","all")
		.on("mouseover", function(){focus.style("display",null)})
		.on("mouseout", function(){focus.style("display","none")})
		.on("mousemove",mousemove)
//	console.log(maleArray)
//	console.log(femaleArray)

	function mousemove(){
		var x0 = ageGroupScale.invert(d3.mouse(this)[0]),
			i = bisectDate(maleArray,x0,1),
			d0 = maleArray[i-1],
			d1 = maleArray[i],
			d = x0 - d0.ageGroup > d1.ageGroup-x0 ? d1:d0;
		console.log(d)
		console.log(ageGroupScale(d.ageGroup))
		console.log(alcoholScale(d.stat))
		focus.select("circle.y")
			.attr("transform","translate(" + ageGroupScale(d.ageGroup) + ","
					+ alcoholScale(d.stat) +")");
		focus.select("text.y1")
			.attr("transform",
				"translate(" + ageGroupScale(d.ageGroup) + "," +
								alcoholScale(d.stat) + ")")
			.text(d.stat);
		
		focus.select("text.y2")
			.attr("transform",
				"translate(" + ageGroupScale(d.ageGroup) + "," +
								alcoholScale(d.stat) + ")")
			.text(d.stat);
		
		focus.select("text.y3")
			.attr("transform",
				"translate(" + ageGroupScale(d.ageGroup) + "," +
								alcoholScale(d.stat) + ")")
			.text("male");
		
		focus.select("text.y4")
			.attr("transform",
				"translate(" + ageGroupScale(d.ageGroup) + "," +
								alcoholScale(d.stat) + ")")
			.text("male");
		
		focus.select(".x")
			.attr("transform",
				"translate(" + ageGroupScale(d.ageGroup) + "," +
								alcoholScale(d.stat) + ")")
						.attr("y2", height - alcoholScale(d.stat));
		
		focus.select(".y")
			.attr("transform",
				"translate(" + width * -1 + "," +
								alcoholScale(d.stat) + ")")
						.attr("x2", width + width);
		var x0Woman = ageGroupScale.invert(d3.mouse(this)[0]),
			i = bisectDate(femaleArray,x0,1),
			d0 = femaleArray[i-1],
			d1 = femaleArray[i],
			d = x0 - d0.ageGroup > d1.ageGroup-x0 ? d1:d0;
		
		focus.select("circle.y-woman")
			.attr("transform","translate(" + ageGroupScale(d.ageGroup) + ","
					+ alcoholScale(d.stat) +")");
		focus.select("text.y1-woman")
			.attr("transform",
				"translate(" + ageGroupScale(d.ageGroup) + "," +
								alcoholScale(d.stat) + ")")
			.text(d.stat);
		
		focus.select("text.y2-woman")
			.attr("transform",
				"translate(" + ageGroupScale(d.ageGroup) + "," +
								alcoholScale(d.stat) + ")")
			.text(d.stat);
		
		focus.select("text.y3-woman")
			.attr("transform",
				"translate(" + ageGroupScale(d.ageGroup) + "," +
								alcoholScale(d.stat) + ")")
			.text("female");
		
		focus.select("text.y4-woman")
			.attr("transform",
				"translate(" + ageGroupScale(d.ageGroup) + "," +
								alcoholScale(d.stat) + ")")
			.text("female");
		
		focus.select(".x-woman")
			.attr("transform",
				"translate(" + ageGroupScale(d.ageGroup) + "," +
								alcoholScale(d.stat) + ")")
						.attr("y2", height - alcoholScale(d.stat));
		
		focus.select(".y-woman")
			.attr("transform",
				"translate(" + width * -1 + "," +
								alcoholScale(d.stat) + ")")
						.attr("x2", width + width);
	}
});


//console.log(data["race"][1]);
//console.log(1);
//var jsonCircles = [
//   { "x_axis": 300, "y_axis": 160, "radius": 20, "color" : "green" },
//   { "x_axis": 400, "y_axis": 300, "radius": 20, "color" : "purple"},
//   { "x_axis": 250, "y_axis": 100, "radius": 20, "color" : "red"}];
//var circles = svg.selectAll("circle")
//                          .data(jsonCircles)
//                          .enter()
//                          .append("circle");
//
//var circleAttributes = circles
//                       .attr("cx", function (d) { return d.x_axis; })
//                       .attr("cy", function (d) { return d.y_axis; })
//                       .attr("r", function (d) { return d.radius; })
//                       .style("fill", function(d) { return d.color; });
//   
   
   

//				.append("circle")
//				.attr("cy",function(d,i){ 
//					for(var a =0;a<4;a++){
//						
//						return alcoholScale(d[a]);
//					};
//				})
//				.attr("cx",function(d,i){
//					for(var a =0;a<4;a++){
//						return ageGroupScale(a)
//					};
//				})
//				.attr("r",20)
//				.style("fill","black");