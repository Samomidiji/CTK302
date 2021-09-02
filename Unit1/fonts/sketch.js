let font1;
let font2;
let font3;

function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/Boank.ttf");
  font2 = loadFont("assets/Jengotan.ttf");
  font3 = loadFont("assets/TheFrankline.ttf");
  textAlign (CENTER);
}

function draw() {
  background('white');
  textFont(font2);
  textSize(40);
  text("This is a Font Test", width/2 ,100);

  textFont(font3);
  textSize(30);
  text("I can use multiple fonts", width/2 ,150);

}
