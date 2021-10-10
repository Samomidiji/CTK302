let x = 0;
let offset = 0;
let strum = 1;
let ship;
let flip;
let changeDirection;

function setup() {
  createCanvas(800, 400);
  ship = loadImage("assest/ship.svg");
  changeDirection = false
  flip = false
}

//flip = !flip

function draw() {
  background('transparent');
  noStroke();
  fill(3, 207, 252);
  beginShape();
  vertex(0, height);
  for (let x = 0; x < width; x++) {
    //var angle = map(x, 0, width, 0, TWO_PI);
    let angle = offset + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    let y = map(sin(angle), -strum, strum, 340, 350);
    vertex(x, y);
  }
  vertex(width, height);
  endShape();
  offset += 0.1;



  if (x >= width) {
    changeDirection = true;
    flip = true;
  } else {
    if (x <= 0) {
      changeDirection = false;
      flip = false;
    }
  }

  if (x >=0 && changeDirection == false && flip == false) {
    push();
    translate(x, 0);
    avatar();
    pop();
    x = x + 3;
  } else {
    if (changeDirection == true && flip == true) {
      push();
      scale(-1, 1)
      translate(-x, 0);
      avatar();
      pop();
      x = x - 3;
    }
  }



}

function avatar() {
  image(ship, 0, 70, 200, 300);
}
