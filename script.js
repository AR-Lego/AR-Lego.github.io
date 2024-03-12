// Get the width of the webpage
var pageWidth = document.documentElement.clientWidth;
// Get the height of the webpage
var pageHeight = document.documentElement.clientHeight;

var oOOo;

class Orb {
  constructor() {
    this.x = pageWidth / 2;
    this.y = pageHeight / 2;
    this.velX = 0;
    this.velY = 0;
    this.size = 5;
    this.color = "red";
  }

  show() {
    fill(this.color);
    circle(this.x, this.y, this.size);
  }

  update() {
    this.x += this.velX;
    this.y += this.velY;
  }
}




function setup() {
  createCanvas(pageWidth / 1.1, pageHeight / 1.1);
  oOOo = new Orb();
  oOOo.velX = 2;
  oOOo.velY = 1;
}

function draw() {
  background(220);
  oOOo.show();
  oOOo.update();
  if (oOOo.x == 0) {
    oOOo.velX = Math.abs(oOOo.velX)
  }
  if (oOOo.x == pageWidth / 1.1) {
    oOOo.velX = -Math.abs(oOOo.velX)
  }
  
}
