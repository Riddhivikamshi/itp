LMSC-261-002
Midterm Documentation

Phase 1

For Phase 1, I created a hand-drawn sketch of my visual object using pencil and paper. The sketch consists of three triangles placed next to each other with small spaces between them, forming an arrow-like pattern. I took a picture of the sketch and saved it as Phase1.jpeg to include in my project folder.

Phase 2

In Phase 2, I translated my hand-drawn sketch into a P5.js sketch. I first worked on understanding the logic of how to draw shapes using coordinates in P5.js. After understanding the logic, I wrote code using the triangle() function to recreate the three triangles from my sketch. I then adjusted and tweaked the coordinates so that the digital drawing matched the proportions and spacing of my original sketch as closely as possible.

After getting the basic shapes working, I added color to the triangles using the fill() function. Initially, I referenced the example fill(0); which fills shapes with black. I then tried to use a HEX color code (#6BA5ED), but it did not work in my code. Instead, I converted the HEX value to RGB and used fill(107, 165, 237) to achieve the color I wanted. I also removed the outline around the shapes using noStroke() to make the design cleaner.

Phase 3

For Phase 3, I read through the assignment instructions and reviewed the logic behind functions and transformations. I created a new file called Phase3.js and placed my triangle drawing code inside a function called drawObject(x, y, s). This function allows the object to be reused and positioned anywhere on the canvas.

Inside the function, I used translate(x, y) to control the position of the object and scale(s) to control its size. I also used push() and pop() to save and restore the drawing state so that transformations would not affect other objects drawn later. To test whether the function worked correctly, I experimented by drawing multiple objects at different positions on the canvas. After confirming that the function worked, I removed the extra test objects because they created scaling and positioning issues while I was experimenting.

Phase 4

In Phase 4, the goal was to tile the visual object across the canvas. In Phase 2, my canvas was 150 × 150, and I noticed that the object visually tiled well when spaced around 150 pixels horizontally and about 100 pixels vertically. However, this did not properly fill the entire canvas for the tiling requirement.

I then worked through the logic of creating a grid. My visual object has an approximate 1.5:1 width-to-height ratio, so I needed to understand how to scale it correctly to fit inside a tiled grid. I used nested for loops to repeat the object across the canvas. I divided the 400 × 400 canvas into a 10 × 10 grid, which means each tile is 40 × 40 pixels. Using this information, I scaled the object so that it would fit inside each grid cell while maintaining its proportions.

The loops move across the canvas horizontally and vertically, placing the object at each grid position. The scale value (cell / 150) adjusts the size of the original drawing so it fits inside the grid cells.

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

  let grid = 10;
  let cell = width / grid;

  for (let x = 0; x < width; x += cell) {
    for (let y = 0; y < height; y += cell) {

      drawObject(x, y, cell / 150);

    }
  }
}

After completing the 10 × 10 grid, I experimented further by changing the value of the grid variable. By setting grid = 20 and later grid = 40, I was able to create 20 × 20 and 40 × 40 tiled versions of the design. This helped me better understand how the grid system and scaling work together to tile objects across the canvas.
