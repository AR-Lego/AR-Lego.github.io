// Get the width of the webpage
var pageWidth = document.documentElement.clientWidth;
// Get the height of the webpage
var pageHeight = document.documentElement.clientHeight;

var oOOo;

class Orb {
  Constructor() {
    this.x = 0;
    this.y = 0;
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
  createCanvas(pageWidth, pageHeight);
  oOOo = new Orb();
}

function draw() {
  background(220);
  oOOo.show();
  oOOo.velX = 1;
  oOOo.velY = 2;
  oOOo.update();
}
