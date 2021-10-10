let state = 0
let timer = 0
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
      background(3, 252, 173);
      stroke(0, 48, 33);
      strokeWeight(6);
      fill(255, 247, 237);
      rect(width / 2, height / 2, 300, 300);
      noStroke();
      fill('black');
      textFont(font);
      textSize(20);
      text("Why is 10 + 10\nthe same as 11 + 11", width / 2, height / 2);
      break;

    case 1:
      background(0, 36, 153);
      stroke(61, 190, 255);
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

  timer++
  if (timer > 5*60){
    timer = 0;
    state ++;
    if (state > 1) state = 0;
  }
}

  timer++
  if (timer > 5*60){
    timer = 0;
    state ++;
    if (state > 1) state = 0;
  }

 //function mouseReleased(){
  // state ++;
  // if (state > 1) state = 0;
// }
