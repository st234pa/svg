var pic = document.getElementById("vimage");
var clr = document.getElementById("clr");

var makeCircle = function(x, y) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 15);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    return c;
}


var addCircle = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var c = makeCircle(x,y);
    pic.appendChild(c);
}

var clearIt = function() {
    pic.removeChild(pic.lastChild);
}

pic.addEventListener("click", addCircle);
clr.addEventListener("click", clearIt);
