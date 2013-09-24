$(document).ready(function() {
  var width = 800;
  var height = 600;
  var padding = 40;

  var colors = ["#ffffd9",
                "#edf8b1",
                "#c7e9b4",
                "#7fcdbb",
                "#41b6c4",
                "#1d91c0",
                "#225ea8",
                "#253494",
                "#081d58"];
  var data =
    [
      [2,0,4,3,3,5,7],
      [0,8,8,8,8,8,0],
      [4,3,5,2,3,5,6],
      [8,3,3,3,3,3,2]
    ];

  var weekly = []

  for (var i = 0; i < data.length; i++)
  {
    var level = 0
    for (var x = 0; x < data[i].length; x++)
    {
      level += data[i][x];
    }
    weekly.push(level);
  }

  var svg = d3.select("body")
  .append("svg")
  .attr("width",width)
  .attr("height",height);

 
  var rows = svg.selectAll("g.row")
    .data(data)
  var rowsEnter = rows.enter()
    .append("g")
    .attr("transform", function(d,i) {
      return "translate(" + [0, 20 + i * 40] + ")";
    })
  rowsEnter.selectAll("rect")
    .data(function(d) { return d})
    .enter()
    .append("rect")
    .attr("x", function(d,i) {return i * 21;})
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", function(d) {return colors[d];});

  console.log(weekly);
  svg.selectAll("rect")
    .data(weekly)
    .enter()
    .append("rect")
    .attr("x", 8 * 21)
    .attr("y", function(d) {
      if (d <= 40)
        {
          return colors[Math.floor(d / 5)];
        }
      else
        {
          return colors[7];
        }
    })
    .attr("width",30)
    .attr("height",30);
 
  
});
