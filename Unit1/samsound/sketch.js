let sound1;
let sound2;
let sound3;


function setup() {
  createCanvas(500, 500);
  background(20, 233, 20);
  sound1 = loadSound("assest/ForKitchen.mp3");
  sound2 = loadSound("assest/SoftAbstraction.mp3");
  sound3 = loadSound("assest/UpbeatMusic.mp3");
  textAlign(CENTER);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  fill(255);
  rect(width / 2, height / 2, 150, 50);
  fill(0);
  text("Click her to play/pause", width / 2, height / 2);
}

function mouseReleased() {
  if (sound3.isPlaying()) {
    background(20, 233, 20);
    sound3.pause();
  } else {
    background(random(255), random(54), random(20));
    sound3.play();
  }
}

// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
