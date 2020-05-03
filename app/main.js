import * as tf from '@tensorflow/tfjs'

var greeter = require("./greeter.js");
var d3 = require("d3");
document.querySelector("#root").appendChild(greeter());

// debuggers

d3.select("#root").append("svg").selectAll("circle")
    .data([32, 57, 112, 293])
  .enter().append("circle")
    .attr("cy", 60)
    .attr("cx", function(d, i) { return i * 100 + 30; })
    .attr("r", function(d) { return Math.sqrt(d); });

    d3.select("#root").append("svg")
        .append("rect")
        .attr("x", 50)
        .attr("y", 60)
        .attr("height", 50)
        .attr("width", 90)
        .attr("fill", "red")