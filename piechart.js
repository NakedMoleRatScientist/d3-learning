$(document).ready(function(){
  var width = 800;
  var height = 600;
  var padding = 40;
  var radius = Math.min(width,height) / 2;
  
  var svg = d3.select("body")
  .append("svg")
  .attr("width",width)
  .attr("height",height)
  .append("g")
  .attr("transform","translate(" + width /2 + "," + height / 2 +")");

  var arc = d3.svg.arc()
  .outerRadius(radius - 10)
  .innerRadius(0);
  
  var data = [33,40,30];

  var pie = d3.layout.pie()
  .value(function(d){return d;});

  var colors = d3.scale.ordinal()
  .range(["red","blue","orange"]);


  var g = svg.selectAll(".arc")
  .data(pie(data))
  .enter()
  .append("g")

  g.append("path")
  .attr("d",arc)
  .style("fill",function(d) {return colors(d.value);});

  
});
