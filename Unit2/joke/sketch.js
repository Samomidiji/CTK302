let state = 0
let font;

function setup() {
  createCanvas(500, 500);
  font = loadFont('assets/DC.ttf')
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  switch (state) {
    case 0:
      background('purple');
      stroke(255, 204, 0);
      strokeWeight(6);
      fill('white');
      rect(width / 2, height / 2, 300, 300);
      noStroke();
      fill('black');
      textFont(font);
      textSize(20);
      text("Why is 10 + 10\nthe same as 11 + 11", width / 2, height / 2);
      break;

    case 1:
      background(252, 3, 152);
      stroke('purple');
      strokeWeight(6);
      fill('white');
      rect(width / 2, height / 2, 300, 300);
      noStroke();
      fill('black');
      textFont(font);
      textSize(20);
      text("Because 10 + 10 is 20\nand 11 + 11 is twenty too", width / 2, height / 2);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 1) state = 0;
}
