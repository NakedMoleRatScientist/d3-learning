var width = 900;
var height = 500;
var dataset = [];

var svg = d3.select("body")
            .append("svg")
            .attr("width",width)
            .attr("height",height);

d3.json("googlealert.json", function(data) {
  var dates = []
  for (var i = 0; i < data.length; i++)
  {
    console.log(d3.time.format.parse(data[i]));
  }
  var timeScale = d3.time.scale();
  timeScale.domain(0,data.length);
  timeScale.range(dates[0],dates[data.length -1]);
});





