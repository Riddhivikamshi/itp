function setup() {
  createCanvas(400,400);
  noStroke();
}

function drawObject(x, y, s) {

  push();              // save drawing state

  translate(x, y);     // move object
  scale(s);            // resize object

  fill(107,165,237);

  // left triangle
  triangle(20,40, 20,110, 60,110);

  // middle triangle
  triangle(30,40, 70,110, 70,40);

  // right triangle
  triangle(80,40, 80,110, 140,75);

  pop();               // restore drawing state
}

function draw() {

  background(255);

  // first object
  drawObject(0,0,1);

  // second object
  drawObject(150,0,1);
}