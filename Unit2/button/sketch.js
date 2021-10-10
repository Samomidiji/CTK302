let state = 0;
let frame1;
let frame2;
let frame3;

function setup() {
  createCanvas(500, 500);
  frame1 = loadImage("assets/frame1.png");
  frame2 = loadImage("assets/frame2.png");
  frame3 = loadImage("assets/frame3.png");
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {

  switch (state) {
    case 0:
      background(20, 3, 0);
      image(frame1, width / 2, width / 2, 168.6 * 1.5, 123.9* 1.5);
      break;
    case 1:
      background(20, 3, 0);
      image(frame2, width / 2, width / 2, 168.6* 1.5, 123.9* 1.5);
      break;
    case 2:
      background(20, 3, 0);
      image(frame3, width / 2, width / 2, 168.6* 1.5, 123.9* 1.5);
      break;
  }

  fill('purple');
  rect(width / 2, height / 2 + 150, 150, 50);
  fill('white');
  text('Click to change', width / 2, height / 2 + 150);

}

function mouseReleased() {
  if ((mouseX > 175) && (mouseX < 325) && (mouseY > 375) && (mouseY < 425)) {
    state++;
    if (state > 2) {
      state = 0;
    }
  }
}
