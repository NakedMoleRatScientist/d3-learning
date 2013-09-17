$(document).ready()
{
  var width = 800;
  var height = 600;
  var padding = 40;
  var dataset = [34, 34, 26, 37, 42, 41, 35, 31, 41, 33, 30, 74, 33, 49, 38, 61, 21, 41, 26, 80, 43, 29, 33, 35, 45, 49, 39, 34, 26, 25, 35, 33]
  dataset.sort()
  median = d3.median(dataset)
  q1 = d3.quantile(dataset,0.25)
  q3 = d3.quantile(dataset,0.75)
  iqr = q3 - q1
  bottom = q1 - 1.5 * iqr
  top = q3 + 1.5 * iqr
  var svg = d3.select("body")
    .append("svg")
    .attr("width",width)
    .attr("height",height)


}
