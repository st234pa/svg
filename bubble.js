var pic = document.getElementById("vimage");
var clr = document.getElementById("clr");

var makeCircle = function() {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", 20);
    c.setAttribute("cy", 20);
    c.setAttribute("r", 15);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    return c;
}


var addCircle = function() {
    var c = makeCircle();
    pic.appendChild(c);
}

var clearIt = function() {
    pic.removeChild(pic.lastChild);
}

pic.addEventListener("click", addCircle);
clr.addEventListener("click", clearIt);
