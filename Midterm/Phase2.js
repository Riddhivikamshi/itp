function setup() {
  createCanvas(150,150);
  noStroke();
}

function draw() {
 fill(107, 165, 237);
  background(255);

  // left triangle
  triangle(20,40, 20,110, 60,110);

  // middle triangle
  triangle(30,40, 70,110, 70,40);

  // right triangle (arrow)
  triangle(80,40, 80,110, 140,75);
}