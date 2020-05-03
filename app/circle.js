module.exports = function(x,y, node){
    var d3 = require("d3");
    var circle = document.createElement('div');
    // greet.textContent = "Hi there and greetings!";
    d3.select(node).append("circle").attr("cx", x).attr("cy", y).attr("r", 2).attr("fill", "black");
    // return greet;
}