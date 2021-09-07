let sound1;
let sound2;
let sound3;


function setup() {
  createCanvas(500, 500);
  background(20,233,20);
  sound1 = loadSound("assest/ForKitchen.mp3");
  sound2 = loadSound("assest/SoftAbstraction.mp3");
  sound3 = loadSound("assest/UpbeatMusic.mp3");
  textAlign(CENTER);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  fill(255);
  rect(width/2, height/2, 120,50);
  fill(0);
  text("Click her to play", width/2, height/2);
}

function mousePressed(){
  if (sound1.isPlaying()){
    background(20,233,20);
    sound1.stop();
  } else {
    background(255,54,20);
    sound1.play();
  }
}
