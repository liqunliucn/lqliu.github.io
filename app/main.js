import * as tf from '@tensorflow/tfjs';
// import { love } from "9784b7604e03883c";
// import * as css from './css/style.css';
var greeter = require("./greeter.js");
var circle = require("./circle.js");
var d3 = require("d3");
var vega = require('vega');
var lodash = require('lodash');
var L = require("leaflet");
require("./css/style.css");
require("leaflet-css");

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);

L.marker([51.5, -0.09]).addTo(mymap)
  .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

L.circle([51.508, -0.11], 500, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a circle.");

L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap).bindPopup("I am a polygon.");


var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on('click', onMapClick);




debugger
var svg = d3.select("#root").append("svg").attr("id", "circle")

// debugger
circle(30, 3, "#circle")

circle(30, 30, "#circle")

circle(35, 30, "#circle")

circle(80, 30, "#circle")



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

  d3.select("#root").append("svg")
  .append("rect")
  .attr("x", 80)
  .attr("y", 10)
  .attr("height", 500)
  .attr("width", 900)
  .attr("fill", "red")