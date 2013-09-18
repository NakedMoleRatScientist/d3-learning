$(document).ready(function()
{
  var width = 800;
  var height = 600;
  var padding = 40;
  var dataset = [34, 34, 26, 37, 42, 41, 35, 31, 41, 33, 30, 74, 33, 49, 38, 61, 21, 41, 26, 80, 43, 29, 33, 35, 45, 49, 39, 34, 26, 25, 35, 33]
  dataset.sort()

  //Claculate the various values needed for a boxplot.
  median = d3.median(dataset)
  q1 = d3.quantile(dataset,0.25)
  q3 = d3.quantile(dataset,0.75)
  iqr = q3 - q1
  bottom = q1 - 1.5 * iqr
  top = q3 + 1.5 * iqr
  

  var yScale = d3.scale.linear()
  .domain([0,dataset[dataset.length - 1]])
  .range([height - padding, padding])

  var svg = d3.select("body")
    .append("svg")
    .attr("width",width)
    .attr("height",height)

  iqr_height = yScale(q1) - yScale(q3)
  rect_x = 50
  var rect = svg.append("rect")
    .attr("fill","none")
    .attr("stroke","black")
    .attr("stroke-width",2)
    .attr("x",rect_x)
    .attr("y",yScale(q3))
    .attr("width",60)
    .attr("height",iqr_height);

  middle_x = rect_x + (rect_x / 2)
  var bottom_line = svg.append("line")
    .attr("stroke","black")
    .attr('stroke-width',2)
    .attr("x1",middle_x )
    .attr("y1",yScale(q1))
    .attr("x2",middle_x)
    .attr("y2",yScale(dataset[0]));
  
});
