let x = 0;
let changeDirection;
let font1;
let font2;
let font3;

function setup() {
  createCanvas(500, 500);
  changeDirection = false;
  font1 = loadFont("assets/Boank.ttf");
  font2 = loadFont("assets/Jengotan.ttf");
  font3 = loadFont("assets/TheFrankline.ttf");
  //textAlign(CENTER);
}

function draw() {
  background('grey');
  textFont(font2);
  textSize(40);
  fill('white');
  text ("This text is for animation", x, height/2);

x = x + 1
  if (x >= 210) {
    x = 0;
}
}
