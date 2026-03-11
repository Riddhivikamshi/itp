function setup() {
  createCanvas(400,400);
  noStroke();
}

function drawObject(x, y, s) {

  push();

  translate(x, y);
  scale(s);

  fill(107,165,237);

  // left triangle
  triangle(20,40, 20,110, 60,110);

  // middle triangle
  triangle(30,40, 70,110, 70,40);

  // right triangle
  triangle(80,40, 80,110, 140,75);

  pop();
}

function draw() {

  background(255);

  let grid = 40;
  let cell = width / grid;

  for (let x = 0; x < width; x += cell) {
    for (let y = 0; y < height; y += cell) {

      drawObject(x, y, cell / 150);

    }
  }
}