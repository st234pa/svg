var pic = document.getElementById("vimage");
var clr = document.getElementById("clr");
/*
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", 0);
  c.setAttribute("cy", 0);
  c.setAttribute("r", 100);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  pic.appendChild(c);

  parseInt("intAsStr");
  .toString();

*/

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

var clearImg = function() {
    while (pic.lastChild) {
        pic.removeChild(pic.lastChild);
    }
    prevX = 0;
    prevY = 0;
};

clr.addEventListener("click", clearImg);
pic.addEventListener("click", addNode);
