var pic = document.getElementById("vimage");
var clr = document.getElementById("clr");

var mouseX, mouseY, prevX, prevY;
prevX = 0;
prevY = 0;

var addNode = function(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", mouseX);
    c.setAttribute("cy", mouseY);
    c.setAttribute("r", 15);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
    if (prevX != 0 && prevY != 0) {
        var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
        l.setAttribute("x1", prevX);
        l.setAttribute("y1", prevY);
        l.setAttribute("x2", mouseX);
        l.setAttribute("y2", mouseY);
        l.setAttribute("stroke-width", 2);
        l.setAttribute("stroke", "black");
        pic.appendChild(l);
    }
    pic.appendChild(c);
    prevX = mouseX;
    prevY = mouseY;
};


//pic.addEventListener("click", addNode);

/*
  var foo = document.getElementsByTagName("circle")[0];
  var myRad = parseInt(foo.getAttribute("r"));
  ...
  var intervalID = window.setInterval(loopbkFxn, 16);
*/

var myRad = 20;
var clearImg = function() {
    while (pic.lastChild) {
        pic.removeChild(pic.lastChild);
    }
    prevX = 0;
    prevY = 0;
};

var dir = 1;
var growCircle = function() {
    clearImg();
    var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circ.setAttribute("cx", pic.getAttribute("width")/2);
    circ.setAttribute("cy", pic.getAttribute("height")/2);
    circ.setAttribute("r", myRad.toString());
    circ.setAttribute("fill", "red");
    circ.setAttribute("stroke", "black");
    pic.appendChild(circ);
    if (parseInt(circ.getAttribute("r")) >= parseInt(pic.getAttribute("width"))/2) {
        dir = -1;
    }
    else if (parseInt(circ.getAttribute("r")) <= 0) {
        dir = 1;
    }
    myRad += dir;
    console.log("doon")
};
var intervalID;

var go = function(e) {
    intervalID = window.setInterval(growCircle, 16);
};

var stopIt = function() {
    clearInterval(intervalID);
};




pic.addEventListener("click", go);
var stopper = document.getElementById("stop");
stopper.addEventListener("click", stopIt);
clr.addEventListener("click", clearImg);
