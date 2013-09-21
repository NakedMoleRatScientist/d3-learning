$(document).ready(function() {
  var width = 800;
  var height = 600;
  var padding = 40;
  var svg = d3.select("body")
    .append("svg")
    .attr("width",width)
    .attr("height",height);

  var dataset = [
    [new Date("2013-09-08"), 3.04],
    [new Date("2013-09-09"), 3.17],
    [new Date("2013-09-10"), 3.58],
    [new Date("2013-09-11"), 2.21],
    [new Date("2013-09-12"), 4.24],
    [new Date("2013-09-13"), 2.67],
    [new Date("2013-09-14"), 4.81]
  ];

  var xScale = d3.time.scale()
  .domain([dataset[0][0], [dataset[dataset.length -1][0]]])
  .range(padding, width - padding);

  var yScale = d3.scale.linear()
  .domain([0,d3.max(dataset, function(d) {return d[1];})])

          
  
});
