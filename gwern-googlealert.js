var width = 900;
var height = 500;
var dataset = [];

var data = d3.json("googlealert.json")
var svg = d3.select("body")
            .append("svg")
            .attr("width",width)
            .attr("height",height);

console.log(d3.select("body"))

