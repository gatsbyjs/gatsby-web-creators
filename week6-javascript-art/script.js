let slider;
let randomColor = 'a34fff';

// variable for rose patterns
let k = 5 / 8;

// setup runs once automatically
function setup() {
  // create a drawing space!
  createCanvas(400, 400);
  
  // create slider between 1 and 10 starting at 4, incrementing by 0.1
  slider = createSlider(1, 10, 4, 0.1);
  
  // add a screen reader label to slider
  slider.attribute('aria-label', 'adjust drawing');

  // call updateColor when slider changes
  slider.input(updateColor);
} 

// update the color on slider change
function updateColor() {
  // round down (floor) a random value within color space bounds to hexadecimal (ffffff).
  randomColor = (Math.floor(Math.random()*16777215).toString(16));
}

// draw runs continously on a loop
function draw() {
  // update pattern variable from slider
  k = slider.value();
  
  // fill with white to reset on each frame
  background(255);
  
  // draw at center of the canvas
  translate(width / 2, height / 2);
  
  beginShape();
  
  // change to random hexidecimal pattern color
  stroke(`#${randomColor}`);
  
  strokeWeight(1);
  
  // run a loop on every frame between 0 and TWO_PI, twice the ratio of the circumference of a circle going around multiple times (8), incrementing by an arbitrary amount (0.05)
  for (let a = 0; a < TWO_PI * 8; a += 0.05) {
    
    // draw lines based on pattern variable and slider
    let r = 200 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    
    // connect the shape with vertices as opposed to dots
    vertex(x, y);
  }
  
  endShape(CLOSE);
}