import * as tf from '@tensorflow/tfjs';
// import {vl} from '@vega/vega-lite-api';
var greeter = require("./greeter.js");
var circle = require("./circle.js");
var d3 = require("d3");
var vega = require('vega');
var lodash = require('lodash');



debugger
var svg = d3.select("#root").append("svg").attr("id", "circle")

// debugger
circle(30, 3, "#circle")

circle(30, 30, "#circle")

circle(35, 30, "#circle")



document.querySelector("#root").appendChild(greeter());

// debuggers

d3.select("#root").append("svg").selectAll("circle")
  .data([32, 57, 112, 293])
  .enter().append("circle")
  .attr("cy", 60)
  .attr("cx", function (d, i) { return i * 100 + 30; })
  .attr("r", function (d) { return Math.sqrt(d); });

var abc = d3.select("#root").append("svg")
  .append("rect")
  .attr("x", 50)
  .attr("y", 60)
  .attr("height", 50)
  .attr("width", 90)
  .attr("fill", "red")

  d3.select("#root").append("svg")
  .append("rect")
  .attr("x", 80)
  .attr("y", 90)
  .attr("height", 50)
  .attr("width", 90)
  .attr("fill", "black")

  d3.select("#root").append("svg")
  .append("rect")
  .attr("x", 80)
  .attr("y", 120)
  .attr("height", 50)
  .attr("width", 90)
  .attr("fill", "green")