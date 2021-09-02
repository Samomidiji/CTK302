function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(190, 240, 255);
  noStroke();

  //road
  fill(30, 35, 37);
  rect(0, 350, 600, 50);

  //road lines
  fill(221);
  rect(0, 372,50,5);
  rect(60, 372,50,5);
  rect(120, 372,50,5);
  rect(180, 372,50,5);
  rect(240, 372,50,5);
  rect(300, 372,50,5);
  rect(360, 372,50,5);
  rect(420, 372,50,5);
  rect(480, 372,50,5);
  rect(540, 372,50,5);

  //grass
  fill(48, 226, 149);
  rect(0, 340, 600, 10);

    //clouds
  push();
  translate (-10,0);
  fill(255);
  arc(100, 80, 120, 60, PI, TWO_PI);
  circle(88, 55, 50);
  circle(120, 56, 35);
  pop();

  push();
  translate (400,10);
  fill(255);
  arc(100, 80, 120, 60, PI, TWO_PI);
  circle(88, 55, 50);
  circle(120, 56, 35);
  pop();


  //sun by monicawen
  fill(245, 187, 87);
  stroke(245, 187, 87);
  push();
  translate(200, 80);
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
  //house1
  fill(58, 21, 113),
  rect(300, 70, 220, 260);

  //windows roll 1 for H1
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

   //windows roll 2 for H1
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

     //windows roll 3 for H1
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

     //windows roll 4 for H1
  fill(144, 94, 221);
  rect(320, 240, 30, 30);
  fill(115, 54, 209);
  rect(320, 240, 30, 5);

  // door
  fill(144, 94, 221);
  rect(370, 240, 80, 90);
  fill(32, 6, 73);
  rect(370, 240, 80, 5);

  fill(32, 6, 73);
  rect(408, 240, 2, 90);

  //fill(144, 94, 221);
  //rect(420, 240, 30, 30);
 // fill(115, 54, 209);
  //rect(420, 240, 30, 5);

  fill(144, 94, 221);
  rect(470, 240, 30, 30);
  fill(115, 54, 209);
  rect(470, 240, 30, 5);

     //windows roll 5 for H1
  fill(144, 94, 221);
  rect(320, 290, 30, 30);
  fill(115, 54, 209);
  rect(320, 290, 30, 5);

 // fill(144, 94, 221);
  // rect(370, 290, 30, 30);
 // fill(115, 54, 209);
 // rect(370, 290, 30, 5);

 // fill(144, 94, 221);
 // rect(420, 290, 30, 30);
 // fill(115, 54, 209);
 // rect(420, 290, 30, 5);

  fill(144, 94, 221);
  rect(470, 290, 30, 30);
  fill(115, 54, 209);
  rect(470, 290, 30, 5);

  //house1 base
  fill(32, 6, 73);
  rect(300, 330, 220, 10);

   //tree 2
  fill(25, 112, 64);
  ellipse(42, 220, 70,140);
  fill(6, 58, 65);
  quad(40, 230, 44, 230, 44, 340, 40, 340);

  //tree 1
  fill(23, 140, 76);
  ellipse(95, 190, 80,150);
  fill(6, 58, 65);
  quad(93, 200, 97, 200, 97, 340, 93, 340);

   //tree 3
  fill(23, 140, 76);
  ellipse(582, 190, 80,150);
  fill(6, 58, 65);
  quad(580, 200, 584, 200, 584, 340, 580, 340);

  //Bench
  fill(57, 7, 32);
  rect(160, 270, 5, 70);
  rect(250, 270, 5, 70);

  fill(185, 109, 20);
  rect(150, 273,115, 10);
  rect(150, 285,115, 10);
  rect(150, 297,115, 10);
  fill(159, 98, 25);
  rect(150, 314,115, 5);


  //fill(255);
  //text(mouseX + " , " + mouseY, 10, 390);
}