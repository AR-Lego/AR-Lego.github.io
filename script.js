// Get the width of the webpage
var pageWidth = document.documentElement.clientWidth;

// Get the height of the webpage
var pageHeight = document.documentElement.clientHeight;

function setup() {
  createCanvas(pageWidth, pageHeight);
}

function draw() {
  background(220);
  fill("red");
  rect(20,20,20,20);
}
