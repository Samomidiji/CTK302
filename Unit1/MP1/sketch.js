let font1;
let font2;
let font3;

function setup() {
  createCanvas(1500, 800);
  //rectMode(CENTER);
  //ellipseMode(CENTER);
  noStroke();
  font1 = loadFont("fonts/Boank.ttf");
  font2 = loadFont("fonts/Jengotan.ttf");
  font3 = loadFont("fonts/TheFrankline.ttf");
}



function draw() {

  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
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


    //sun by monicawen
    fill(255, 249, 230);
    stroke(255);
    push();
    translate(600, 100);
    //rotate(radians(frameCount / 2));
    ellipse(0, 0, 60, 60);
    //line(0, -60, 0, -40);
    //line(0, 40, 0, 60);
    //line(-45, -45, -30, -30);
    //line(45, -45, 30, -30);
    //line(-60, 0, -40, 0);
    //line(40, 0, 60, 0);
    //line(-45, 45, -30, 30);
    //line(45, 45, 30, 30);
    pop();
    noFill();


    noStroke();
    push();
    translate(450, 230);
    //house1
    fill(38, 10, 77),
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

    //tree 3
    //fill(6, 58, 65);
    //quad(248, 330, 252, 330, 252, 690, 248, 690);
    //fill(25, 112, 64);
    //ellipse(250, 380, 120, 220);

    //tree 4
    //fill(6, 58, 65);
    //quad(348, 300, 352, 300, 352, 690, 348, 690);
    //fill(23, 140, 76);
    //ellipse(350, 320, 120, 220);

    //tree 5
    //fill(6, 58, 65);
    //quad(448, 330, 452, 330, 452, 690, 448, 690);
    //fill(25, 112, 64);
    //ellipse(450, 400, 120, 220);


    //tree 7
    //fill(6, 58, 65);
    //quad(1298, 300, 1302, 300, 1302, 690, 1298, 690);
    //fill(23, 140, 76);
    //ellipse(1300, 300, 120, 220);

    //tree 6
    //fill(6, 58, 65);
    //quad(1198, 330, 1202, 330, 1202, 690, 1198, 690);
    //fill(25, 112, 64);
    //ellipse(1200, 330, 120, 220);

    //tree 8
    fill(6, 58, 65);
    quad(1398, 330, 1402, 330, 1402, 690, 1398, 690);
    fill(14, 61, 35);
    ellipse(1400, 400, 120, 220);

    //push();
    //translate(400, 350);
    //Bench
    //fill(57, 7, 32);
  //  rect(160, 270, 5, 70);
    //rect(250, 270, 5, 70);

    //fill(185, 109, 20);
    //rect(150, 273, 115, 10);
    //rect(150, 285, 115, 10);
    //rect(150, 297, 115, 10);
    //fill(159, 98, 25);
    //rect(150, 314, 115, 5);
    //pop();

    //push();
    //translate(900, 350);
    //Bench
    //fill(57, 7, 32);
    //rect(160, 270, 5, 70);
    //rect(250, 270, 5, 70);

    //fill(185, 109, 20);
    //rect(150, 273, 115, 10);
    //rect(150, 285, 115, 10);
    //rect(150, 297, 115, 10);
    //fill(159, 98, 25);
    //rect(150, 314, 115, 5);
    //pop();


  } else {
    // when the mouse isn't pressed!
    background(190, 240, 255);
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
    fill(48, 226, 149);
    rect(0, 690, 1500, 10);

    //clouds1
    push();
    translate(-10, 0);
    fill(255);
    arc(100, 80, 120, 60, PI, TWO_PI);
    circle(88, 55, 50);
    circle(120, 56, 35);
    pop();

    //clouds2
    push();
    translate(350, 10);
    fill(255);
    arc(100, 80, 120, 60, PI, TWO_PI);
    circle(88, 55, 50);
    circle(120, 56, 35);
    pop();

    //clouds3
    push();
    translate(800, 30);
    fill(255);
    arc(100, 80, 120, 60, PI, TWO_PI);
    circle(88, 55, 50);
    circle(120, 56, 35);
    pop();

    //clouds4
    push();
    translate(1300, 10);
    fill(255);
    arc(100, 80, 120, 60, PI, TWO_PI);
    circle(88, 55, 50);
    circle(120, 56, 35);
    pop();


    //sun by monicawen
    fill(245, 187, 87);
    stroke(245, 187, 87);
    push();
    translate(600, 100);
    //rotate(radians(frameCount / 2));
    ellipse(0, 0, 60, 60);
    line(0, -60, 0, -40);
    line(0, 40, 0, 60);
    line(-45, -45, -30, -30);
    line(45, -45, 30, -30);
    line(-60, 0, -40, 0);
    line(40, 0, 60, 0);
    line(-45, 45, -30, 30);
    line(45, 45, 30, 30);
    pop();
    noFill();


    noStroke();
    push();
    translate(450, 230);
    //house1
    fill(58, 21, 113),
      rect(300, 0, 220, 460);

    //windows roll 1 for H1
    push();
    translate(0, -70);
    fill(144, 94, 221);
    rect(320, 90, 30, 30);
    fill(115, 54, 209);
    rect(320, 90, 30, 5);

    fill(144, 94, 221);
    rect(370, 90, 30, 30);
    fill(115, 54, 209);
    rect(370, 90, 30, 5);

    fill(144, 94, 221);
    rect(420, 90, 30, 30);
    fill(115, 54, 209);
    rect(420, 90, 30, 5);

    fill(144, 94, 221);
    rect(470, 90, 30, 30);
    fill(115, 54, 209);
    rect(470, 90, 30, 5);
    pop();

    //windows roll 2 for H1
    push();
    translate(0, -70);
    fill(144, 94, 221);
    rect(320, 140, 30, 30);
    fill(115, 54, 209);
    rect(320, 140, 30, 5);

    fill(144, 94, 221);
    rect(370, 140, 30, 30);
    fill(115, 54, 209);
    rect(370, 140, 30, 5);

    fill(144, 94, 221);
    rect(420, 140, 30, 30);
    fill(115, 54, 209);
    rect(420, 140, 30, 5);

    fill(144, 94, 221);
    rect(470, 140, 30, 30);
    fill(115, 54, 209);
    rect(470, 140, 30, 5);
    pop();

    //windows roll 3 for H1
    push();
    translate(0, -70);
    fill(144, 94, 221);
    rect(320, 190, 30, 30);
    fill(115, 54, 209);
    rect(320, 190, 30, 5);

    fill(144, 94, 221);
    rect(370, 190, 30, 30);
    fill(115, 54, 209);
    rect(370, 190, 30, 5);

    fill(144, 94, 221);
    rect(420, 190, 30, 30);
    fill(115, 54, 209);
    rect(420, 190, 30, 5);

    fill(144, 94, 221);
    rect(470, 190, 30, 30);
    fill(115, 54, 209);
    rect(470, 190, 30, 5);
    pop();

    //windows roll 4 for H1
    push();
    translate(0, -70);
    fill(144, 94, 221);
    rect(320, 240, 30, 30);
    fill(115, 54, 209);
    rect(320, 240, 30, 5);

    fill(144, 94, 221);
    rect(370, 240, 30, 30);
    fill(115, 54, 209);
    rect(370, 240, 30, 5);

    fill(144, 94, 221);
    rect(420, 240, 30, 30);
    fill(115, 54, 209);
    rect(420, 240, 30, 5);

    fill(144, 94, 221);
    rect(470, 240, 30, 30);
    fill(115, 54, 209);
    rect(470, 240, 30, 5);
    pop();

    //windows roll 5 for H1
    push();
    translate(0, -70);
    fill(144, 94, 221);
    rect(320, 290, 30, 30);
    fill(115, 54, 209);
    rect(320, 290, 30, 5);

    fill(144, 94, 221);
    rect(370, 290, 30, 30);
    fill(115, 54, 209);
    rect(370, 290, 30, 5);

    fill(144, 94, 221);
    rect(420, 290, 30, 30);
    fill(115, 54, 209);
    rect(420, 290, 30, 5);

    fill(144, 94, 221);
    rect(470, 290, 30, 30);
    fill(115, 54, 209);
    rect(470, 290, 30, 5);
    pop();

    //windows roll 6 for H1
    push();
    translate(0, -70);
    fill(144, 94, 221);
    rect(320, 340, 30, 30);
    fill(115, 54, 209);
    rect(320, 340, 30, 5);

    fill(144, 94, 221);
    rect(370, 340, 30, 30);
    fill(115, 54, 209);
    rect(370, 340, 30, 5);

    fill(144, 94, 221);
    rect(420, 340, 30, 30);
    fill(115, 54, 209);
    rect(420, 340, 30, 5);

    fill(144, 94, 221);
    rect(470, 340, 30, 30);
    fill(115, 54, 209);
    rect(470, 340, 30, 5);
    pop();

    //windows roll 7 for H1
    push();
    translate(0, -70);
    fill(144, 94, 221);
    rect(320, 390, 30, 30);
    fill(115, 54, 209);
    rect(320, 390, 30, 5);

    fill(144, 94, 221);
    rect(370, 390, 30, 30);
    fill(115, 54, 209);
    rect(370, 390, 30, 5);

    fill(144, 94, 221);
    rect(420, 390, 30, 30);
    fill(115, 54, 209);
    rect(420, 390, 30, 5);

    fill(144, 94, 221);
    rect(470, 390, 30, 30);
    fill(115, 54, 209);
    rect(470, 390, 30, 5);
    pop();

    //windows roll 7 for H1
    push();
    translate(0, -70);
    fill(144, 94, 221);
    rect(320, 440, 30, 30);
    fill(115, 54, 209);
    rect(320, 440, 30, 5);

    fill(144, 94, 221);
    rect(370, 440, 30, 30);
    fill(115, 54, 209);
    rect(370, 440, 30, 5);

    fill(144, 94, 221);
    rect(420, 440, 30, 30);
    fill(115, 54, 209);
    rect(420, 440, 30, 5);

    fill(144, 94, 221);
    rect(470, 440, 30, 30);
    fill(115, 54, 209);
    rect(470, 440, 30, 5);
    pop();

    //windows roll 7 for H1
    push();
    translate(0, -70);
    fill(144, 94, 221);
    rect(320, 490, 30, 30);
    fill(115, 54, 209);
    rect(320, 490, 30, 5);

    fill(144, 94, 221);
    rect(370, 490, 30, 30);
    fill(115, 54, 209);
    rect(370, 490, 30, 5);

    fill(144, 94, 221);
    rect(420, 490, 30, 30);
    fill(115, 54, 209);
    rect(420, 490, 30, 5);

    fill(144, 94, 221);
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
    fill(25, 112, 64);
    ellipse(70, 330, 120, 220);

    //tree 2
    fill(6, 58, 65);
    quad(158, 300, 162, 300, 162, 690, 158, 690);
    fill(23, 140, 76);
    ellipse(160, 300, 120, 220);

    //tree 3
    fill(6, 58, 65);
    quad(248, 330, 252, 330, 252, 690, 248, 690);
    fill(25, 112, 64);
    ellipse(250, 380, 120, 220);

    //tree 4
    fill(6, 58, 65);
    quad(348, 300, 352, 300, 352, 690, 348, 690);
    fill(23, 140, 76);
    ellipse(350, 320, 120, 220);

    //tree 5
    fill(6, 58, 65);
    quad(448, 330, 452, 330, 452, 690, 448, 690);
    fill(25, 112, 64);
    ellipse(450, 400, 120, 220);


    //tree 7
    fill(6, 58, 65);
    quad(1298, 300, 1302, 300, 1302, 690, 1298, 690);
    fill(23, 140, 76);
    ellipse(1300, 300, 120, 220);

    //tree 6
    fill(6, 58, 65);
    quad(1198, 330, 1202, 330, 1202, 690, 1198, 690);
    fill(25, 112, 64);
    ellipse(1200, 330, 120, 220);

    //tree 8
    fill(6, 58, 65);
    quad(1398, 330, 1402, 330, 1402, 690, 1398, 690);
    fill(25, 112, 64);
    ellipse(1400, 400, 120, 220);

    push();
    translate(400, 350);
    //Bench
    fill(57, 7, 32);
    rect(160, 270, 5, 70);
    rect(250, 270, 5, 70);

    fill(185, 109, 20);
    rect(150, 273, 115, 10);
    rect(150, 285, 115, 10);
    rect(150, 297, 115, 10);
    fill(159, 98, 25);
    rect(150, 314, 115, 5);
    pop();

    push();
    translate(900, 350);
    //Bench
    fill(57, 7, 32);
    rect(160, 270, 5, 70);
    rect(250, 270, 5, 70);

    fill(185, 109, 20);
    rect(150, 273, 115, 10);
    rect(150, 285, 115, 10);
    rect(150, 297, 115, 10);
    fill(159, 98, 25);
    rect(150, 314, 115, 5);
    pop();


    //fill(255);
    //text(mouseX + " , " + mouseY, 10, 390);


  }



  // this shows mouse location - comment it out when you're done!

  //fill(255);
  //textFont(font3);
  //textSize(50);
  //text(mouseX + ", " + mouseY, 40, 40);

}






// record the mouse location in console when clicked
//function mouseReleased() {
//print(mouseX + ", " + mouseY);
