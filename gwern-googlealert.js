var width = 900;
var height = 500;
var dataset = [];

d3.json("googlealert.json", function(data) {
  var xScale = d3.scale.linear();
  var dates = []
  for (var i = 0; i < data.length; i++)
  {
    console.log(d3.time.format.parse(data[i]));
  }
/*  var dateScale = d3.time.scale();
  dataScale.domain(0,data.length);
  dataScale.range(dates[0],dates[data.length -1]);
*/
});

var svg = d3.select("body")
            .append("svg")
            .attr("width",width)
            .attr("height",height);



