$(document).ready(function (){
  var width = 800;
  var height = 300;


  var svg = d3.select("body")
    .append("svg")
    .attr("font-family","sans-serif")
    .attr("font-size","0.80em")
    .attr("width",width)
    .attr("height",height);


  var square = svg.append("rect")
    .attr("x",90)
    .attr("y",60)
    .attr("width",60)
    .attr('height',60);

  $("#animate").click(function() {
    console.log("beep");
    square.transition().attr("x",120);
  })
});  
