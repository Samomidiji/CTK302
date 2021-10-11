let car;
let button;
let state;
let font;
var mic;
var vol = 0;
var approachingVol = 0;
let theLoudestItGets = 1;
var ease = 0.01;
let x;

function setup() {
  createCanvas(1500, 800);
  car = loadImage('assets/car.png');
  button = loadImage('assets/button.svg');
  font = loadFont('assets/DC.ttf')
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  vol = mic.getLevel().toFixed(1);
  approachingVol += (vol - approachingVol) * ease;
  x = map(approachingVol, 0, theLoudestItGets, 0, width);

  background('transparent');
  bg();
  racecar();
  textSize(20);
  fill(255);
  //text(mouseX + " , " + mouseY, 50, 50);
  textFont(font);
  fill('white')
  textSize(50);
  text('Welcome to the Voice Race', width / 2, 100);
  buttonP();
  textSize(30);
  text('Click to Start', width / 2, 210);



  switch (state) {
    case 0:
      background('transparent');
      bg();
      push();
      translate(x, 0);
      racecar();
      pop();
      textFont(font);
      fill('white')
      textSize(50);
      text('Scream to race', width / 2, 180);
      if (vol > 0.1 ) {
        state = 1}

      break;

    case 1:
      background('transparent');
      bg();
      fill(255);
      push();
      translate(x, 0);
      racecar();
      pop();
      textFont(font);
      fill('white')
      textSize(50);
      text('Baby Steps? Louder!!!', width / 2, 180);
      if (vol > 0.35) {
        state = 2}
      break;

    case 2:
      background('transparent');
      bg();
      fill(255);
      push();
      translate(x, 0);
      racecar();
      pop();
      textFont(font);
      fill('white')
      textSize(50);
      text('Now we are moving!', width / 2, 180);
      if (vol > 0.7) {
        state = 3
        state++}
      break;

    case 3:
      background('transparent');
      bg();
      fill(255);
      textFont(font);
      fill('white')
      textSize(50);
      text('Okay, I see you!', width / 2, 180);
      if (vol > 1) {
        state = 4}
      break;

    case 4:
      background('transparent');
      bg();
      fill(255);
      push();
      translate(x, 0);
      racecar();
      pop();
      textFont(font);
      fill('white')
      textSize(50);
      text('You are on fire!!!', width / 2, 180);

      break;
  }

}

  function bg() {
    background(12, 13, 61);
    noStroke();

    //road
    fill(30, 35, 37);
    rect(0, 700, 1500, 100);

    //road lines
    fill(221);
    rect(0, 742, 50, 5);
    rect(60, 742, 50, 5);
    rect(120, 742, 50, 5);
    rect(180, 742, 50, 5);
    rect(240, 742, 50, 5);
    rect(300, 742, 50, 5);
    rect(360, 742, 50, 5);
    rect(420, 742, 50, 5);
    rect(480, 742, 50, 5);
    rect(540, 742, 50, 5);
    rect(600, 742, 50, 5);
    rect(660, 742, 50, 5);
    rect(720, 742, 50, 5);
    rect(780, 742, 50, 5);
    rect(840, 742, 50, 5);
    rect(900, 742, 50, 5);
    rect(960, 742, 50, 5);
    rect(1020, 742, 50, 5);
    rect(1080, 742, 50, 5);
    rect(1140, 742, 50, 5);
    rect(1200, 742, 50, 5);
    rect(1260, 742, 50, 5);
    rect(1320, 742, 50, 5);
    rect(1380, 742, 50, 5);
    rect(1440, 742, 50, 5);

    //grass
    fill(11, 153, 91);
    rect(0, 690, 1500, 10);

    //clouds1
    push();
    translate(-10, 0);
    fill(51, 52, 84);
    arc(100, 80, 120, 60, PI, TWO_PI);
    circle(88, 55, 50);
    circle(120, 56, 35);
    pop();

    //clouds2
    push();
    translate(350, 10);
    fill(51, 52, 84);
    arc(100, 80, 120, 60, PI, TWO_PI);
    circle(88, 55, 50);
    circle(120, 56, 35);
    pop();

    //clouds3
    push();
    translate(800, 30);
    fill(51, 52, 84);
    arc(100, 80, 120, 60, PI, TWO_PI);
    circle(88, 55, 50);
    circle(120, 56, 35);
    pop();

    //clouds4
    push();
    translate(1300, 10);
    fill(51, 52, 84);
    arc(100, 80, 120, 60, PI, TWO_PI);
    circle(88, 55, 50);
    circle(120, 56, 35);
    pop();


    //moon by sam
    //fill(255, 249, 230);
    //  stroke(255);
    //  push();
    //  translate(600, 100);
    //rotate(radians(frameCount / 2));
    //  ellipse(0, 0, 60, 60);
    //pop();
    //  noFill();


    noStroke();

    //house2
    fill(0, 61, 138);
    rect(300, 440, 400, 250);
    fill(0, 61, 138);
    rect(240, 490, 60, 200);
    fill(0, 61, 138);
    rect(600, 360, 40, 80);
    fill(0, 36, 82);
    rect(590, 340, 60, 30);

    //window2-1
    fill(255, 233, 171);
    rect(350, 470, 100, 50);
    fill(0, 103, 171);
    rect(350, 470, 100, 5);

    //window2-3
    push();
    translate(105, 0)
    fill(255, 233, 171);
    rect(350, 470, 100, 50);
    fill(0, 103, 171);
    rect(350, 470, 100, 5);
    pop();

    //window2-3
    push();
    translate(210, 0)
    fill(255, 233, 171);
    rect(350, 470, 100, 50);
    fill(0, 103, 171);
    rect(350, 470, 100, 5);
    pop();


    //house3
    fill(80, 0, 97);
    rect(1020, 390, 300, 300);
    fill(59, 0, 71);
    quad(1080, 320, 1260, 320, 1320, 390, 1020, 390);

    //window3-1
    fill(255, 233, 171);
    rect(1056, 420, 40, 60);
    fill(69, 0, 84);
    rect(1056, 420, 40, 5);

    //window3-2
    push();
    translate(60, 0)
    fill(255, 233, 171);
    rect(1056, 420, 40, 60);
    fill(69, 0, 84);
    rect(1056, 420, 40, 5);
    pop();

    //window3-3
    push();
    translate(120, 0)
    fill(255, 233, 171);
    rect(1056, 420, 40, 60);
    fill(69, 0, 84);
    rect(1056, 420, 40, 5);
    pop();

    //window3-4
    push();
    translate(180, 0)
    fill(255, 233, 171);
    rect(1056, 420, 40, 60);
    fill(69, 0, 84);
    rect(1056, 420, 40, 5);
    pop();

    // row 2
    push();
    translate(0, 90);
    //window3-1
    fill(255, 233, 171);
    rect(1056, 420, 40, 60);
    fill(69, 0, 84);
    rect(1056, 420, 40, 5);

    //window3-2
    push();
    translate(60, 0)
    fill(255, 233, 171);
    rect(1056, 420, 40, 60);
    fill(69, 0, 84);
    rect(1056, 420, 40, 5);
    pop();

    //window3-3
    push();
    translate(120, 0)
    fill(255, 233, 171);
    rect(1056, 420, 40, 60);
    fill(69, 0, 84);
    rect(1056, 420, 40, 5);
    pop();

    //window3-4
    push();
    translate(180, 0)
    fill(255, 233, 171);
    rect(1056, 420, 40, 60);
    fill(69, 0, 84);
    rect(1056, 420, 40, 5);
    pop();
    pop();

    // row 3
    push();
    translate(0, 180);
    //window3-1
    fill(255, 233, 171);
    rect(1056, 420, 40, 60);
    fill(69, 0, 84);
    rect(1056, 420, 40, 5);

    //window3-2
    push();
    translate(60, 0)
    fill(255, 233, 171);
    rect(1056, 420, 40, 60);
    fill(69, 0, 84);
    rect(1056, 420, 40, 5);
    pop();

    //window3-3
    push();
    translate(120, 0)
    fill(255, 233, 171);
    rect(1056, 420, 40, 60);
    fill(69, 0, 84);
    rect(1056, 420, 40, 5);
    pop();

    //window3-4
    push();
    translate(180, 0)
    fill(255, 233, 171);
    rect(1056, 420, 40, 60);
    fill(69, 0, 84);
    rect(1056, 420, 40, 5);
    pop();
    pop();


    push();
    translate(450, 230);
    //house1
    fill(38, 10, 77);
    rect(300, 0, 220, 460);

    //windows roll 1 for H1
    push();
    translate(0, -70);
    fill(255, 233, 171);
    rect(320, 90, 30, 30);
    fill(115, 54, 209);
    rect(320, 90, 30, 5);

    fill(255, 233, 171);
    rect(370, 90, 30, 30);
    fill(115, 54, 209);
    rect(370, 90, 30, 5);

    fill(255, 233, 171);
    rect(420, 90, 30, 30);
    fill(115, 54, 209);
    rect(420, 90, 30, 5);

    fill(255, 233, 171);
    rect(470, 90, 30, 30);
    fill(115, 54, 209);
    rect(470, 90, 30, 5);
    pop();

    //windows roll 2 for H1
    push();
    translate(0, -70);
    fill(255, 233, 171);
    rect(320, 140, 30, 30);
    fill(115, 54, 209);
    rect(320, 140, 30, 5);

    fill(255, 233, 171);
    rect(370, 140, 30, 30);
    fill(115, 54, 209);
    rect(370, 140, 30, 5);

    fill(255, 233, 171);
    rect(420, 140, 30, 30);
    fill(115, 54, 209);
    rect(420, 140, 30, 5);

    fill(255, 233, 171);
    rect(470, 140, 30, 30);
    fill(115, 54, 209);
    rect(470, 140, 30, 5);
    pop();

    //windows roll 3 for H1
    push();
    translate(0, -70);
    fill(255, 233, 171);
    rect(320, 190, 30, 30);
    fill(115, 54, 209);
    rect(320, 190, 30, 5);

    fill(255, 233, 171);
    rect(370, 190, 30, 30);
    fill(115, 54, 209);
    rect(370, 190, 30, 5);

    fill(255, 233, 171);
    rect(420, 190, 30, 30);
    fill(115, 54, 209);
    rect(420, 190, 30, 5);

    fill(255, 233, 171);
    rect(470, 190, 30, 30);
    fill(115, 54, 209);
    rect(470, 190, 30, 5);
    pop();

    //windows roll 4 for H1
    push();
    translate(0, -70);
    fill(255, 233, 171);
    rect(320, 240, 30, 30);
    fill(115, 54, 209);
    rect(320, 240, 30, 5);

    fill(255, 233, 171);
    rect(370, 240, 30, 30);
    fill(115, 54, 209);
    rect(370, 240, 30, 5);

    fill(255, 233, 171);
    rect(420, 240, 30, 30);
    fill(115, 54, 209);
    rect(420, 240, 30, 5);

    fill(255, 233, 171);
    rect(470, 240, 30, 30);
    fill(115, 54, 209);
    rect(470, 240, 30, 5);
    pop();

    //windows roll 5 for H1
    push();
    translate(0, -70);
    fill(255, 233, 171);
    rect(320, 290, 30, 30);
    fill(115, 54, 209);
    rect(320, 290, 30, 5);

    fill(255, 233, 171);
    rect(370, 290, 30, 30);
    fill(115, 54, 209);
    rect(370, 290, 30, 5);

    fill(255, 233, 171);
    rect(420, 290, 30, 30);
    fill(115, 54, 209);
    rect(420, 290, 30, 5);

    fill(255, 233, 171);
    rect(470, 290, 30, 30);
    fill(115, 54, 209);
    rect(470, 290, 30, 5);
    pop();

    //windows roll 6 for H1
    push();
    translate(0, -70);
    fill(255, 233, 171);
    rect(320, 340, 30, 30);
    fill(115, 54, 209);
    rect(320, 340, 30, 5);

    fill(255, 233, 171);
    rect(370, 340, 30, 30);
    fill(115, 54, 209);
    rect(370, 340, 30, 5);

    fill(255, 233, 171);
    rect(420, 340, 30, 30);
    fill(115, 54, 209);
    rect(420, 340, 30, 5);

    fill(255, 233, 171);
    rect(470, 340, 30, 30);
    fill(115, 54, 209);
    rect(470, 340, 30, 5);
    pop();

    //windows roll 7 for H1
    push();
    translate(0, -70);
    fill(255, 233, 171);
    rect(320, 390, 30, 30);
    fill(115, 54, 209);
    rect(320, 390, 30, 5);

    fill(255, 233, 171);
    rect(370, 390, 30, 30);
    fill(115, 54, 209);
    rect(370, 390, 30, 5);

    fill(255, 233, 171);
    rect(420, 390, 30, 30);
    fill(115, 54, 209);
    rect(420, 390, 30, 5);

    fill(255, 233, 171);
    rect(470, 390, 30, 30);
    fill(115, 54, 209);
    rect(470, 390, 30, 5);
    pop();

    //windows roll 7 for H1
    push();
    translate(0, -70);
    fill(255, 233, 171);
    rect(320, 440, 30, 30);
    fill(115, 54, 209);
    rect(320, 440, 30, 5);

    fill(255, 233, 171);
    rect(370, 440, 30, 30);
    fill(115, 54, 209);
    rect(370, 440, 30, 5);

    fill(255, 233, 171);
    rect(420, 440, 30, 30);
    fill(115, 54, 209);
    rect(420, 440, 30, 5);

    fill(255, 233, 171);
    rect(470, 440, 30, 30);
    fill(115, 54, 209);
    rect(470, 440, 30, 5);
    pop();

    //windows roll 7 for H1
    push();
    translate(0, -70);
    fill(255, 233, 171);
    rect(320, 490, 30, 30);
    fill(115, 54, 209);
    rect(320, 490, 30, 5);

    fill(255, 233, 171);
    rect(370, 490, 30, 30);
    fill(115, 54, 209);
    rect(370, 490, 30, 5);

    fill(255, 233, 171);
    rect(420, 490, 30, 30);
    fill(115, 54, 209);
    rect(420, 490, 30, 5);

    fill(255, 233, 171);
    rect(470, 490, 30, 30);
    fill(115, 54, 209);
    rect(470, 490, 30, 5);
    pop();

    // door
    push();
    translate(0, 120);
    fill(144, 94, 221);
    rect(370, 250, 80, 80);
    fill(32, 6, 73);
    rect(370, 250, 80, 5);

    fill(32, 6, 73);
    rect(408, 250, 2, 90);

    //house1 base
    fill(32, 6, 73);
    rect(300, 330, 220, 10);
    pop();
    pop();

    //tree 1
    fill(6, 58, 65);
    quad(68, 330, 72, 330, 72, 690, 68, 690);
    fill(14, 61, 35);
    ellipse(70, 330, 120, 220);

    //tree 2
    fill(6, 58, 65);
    quad(158, 300, 162, 300, 162, 690, 158, 690);
    fill(17, 79, 45);
    ellipse(160, 300, 120, 220);


    //tree 8
    fill(6, 58, 65);
    quad(1398, 330, 1402, 330, 1402, 690, 1398, 690);
    fill(14, 61, 35);
    ellipse(1400, 400, 120, 220);
  }

  function racecar() {
    image(car, 0, 570, 277.5, 189.5);
  }

  function buttonP() {
    image(button, width / 2 - 140, 150);
  }

  function mouseReleased() {
    if ((mouseX > 628) && (mouseX < 892) && (mouseY > 162) && (mouseY < 240)) {
      state = 0;
    }
  }

  function touchStarted() {
    getAudioContext().resume();
  }
