let font1;

function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/Jengotan.ttf");
}

function draw() {
  background('yellow');
  textFont(font1);
  textSize(24);
  text("hello world", 100,100);

}
