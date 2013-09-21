$(document).ready(function() {
  var width = 800;
  var height = 600;

  var svg = d3.select("body")
    .append("svg")
    .attr("width",width)
    .attr("height",height);

  dataset = [
    ["2013-09-08", 3.04], ["2013-09-09", 3.17], ["2013-09-10",3.58],
    ["2013-09-11", 2.21], ["2013-09-12", 4.24], ["2013-09-13",2.67],
    ["2013-09-14",4.81]
            ];
});
