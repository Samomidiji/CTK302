let state = 0;
let a = 0;
let song1, song2, song3;


function preload() {
  song1 = loadSound("assest/selfish.mp3");
  song2 = loadSound("assest/bounce.mp3");
  song3 = loadSound("assest/infinity.mp3");

  song1.loop();
  song2.loop();
  song3.loop();
  song1.pause();
  song2.pause();
  song3.pause();

}

function setup() {
  createCanvas(500, 500);
  rectMode (CENTER);
  textAlign(CENTER);
}

function draw() {
  switch (state) {
    case 0:
      song1.play();
      state = 1
      break;

    case 1:
      background('black');
      stroke(212, 152, 0);
      strokeWeight(10);
      fill(71, 35, 0);
      rect( width/2, height/2 - 30, 300, 300);
      noStroke();
      fill(20, 74, 0);
      rect( width/2, height/2 + 155, 310, 60);
      fill('white')
      text('Selfish by Laycon', width/2, height/2 + 155)
      push();
      translate (width/2, height/2 - 30);
      rotate(a);
      fill('red');
      ellipse( 0, 0, 250, 250);
      fill('yellow');
      rect( 0, 0, 50, 50, 20);
      a = a + 0.1;
      pop();
      break;

    case 2:
      song2.play();
      state = 3
      break;

    case 3:
      background('green');
      stroke(212, 152, 0);
      strokeWeight(10);
      fill(71, 35, 0);
      rect( width/2, height/2 - 30, 300, 300);
      noStroke();
      fill('black');
      rect( width/2, height/2 + 155, 310, 60);
      fill('white')
      text('Bounce by Ruger', width/2, height/2 + 155)
      push();
      translate (width/2, height/2 - 30);
      rotate(a);
      fill('blue');
      ellipse( 0, 0, 250, 250);
      fill('yellow');
      rect( 0, 0, 50, 50, 20);
      a = a + 0.1;
      pop();
      break;

    case 4:
      song3.play();
      state = 5
      break;

    case 5:
      background('purple');
      stroke(212, 152, 0);
      strokeWeight(10);
      fill(71, 35, 0);
      rect( width/2, height/2 - 30, 300, 300);
      noStroke();
      fill(20, 74, 0);
      rect( width/2, height/2 + 155, 310, 60);
      fill('white')
      text('Infinity by Olamide', width/2, height/2 + 155)
      push();
      translate (width/2, height/2 - 30);
      rotate(a);
      fill('yellow');
      ellipse( 0, 0, 250, 250);
      fill('brown');
      rect( 0, 0, 50, 50, 20);
      a = a + 0.1;
      pop();
      break;

  }
}

function mouseReleased(){
  song1.pause();
  song2.pause();
  song3.pause();
  state++;
  if (state > 5){
    state = 0;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
