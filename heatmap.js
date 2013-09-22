$(document).ready(function() {
  var width = 800;
  var height = 600;
  var padding = 40;

  var colors = ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"];
  var data =
    [
      [2,0,4,3,3,5,7],
      [2,3,1,1,1,1,1],
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

  

  
});
